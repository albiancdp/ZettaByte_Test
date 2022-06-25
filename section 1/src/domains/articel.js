import articelModel from '../models/articel';

const sortView = {
  createdAt: { createdAt: -1 },
  title: { title: -1 },
  creator: { creator: -1 },
};

const createArticel = async (data) => {
  return new Promise((resolve, reject) => {
    articelModel.create(data)
      .then(result => {
        resolve({ status: true, data: result });
      }).catch(err => {
        let notValid = {};
        if (err.code === 11000) {
          // edit value in object
          Object.keys(err.keyValue).forEach((key) => {
            notValid[key] = err.keyValue[key] + ' is Already Exist';
          });
          resolve({ status: false, notValid: notValid });
        };
        reject(err);
      });
  });
};

const listArticel = async (req) => {
  return new Promise((resolve, reject) => {
    const sorting = sortView[req.query.sort || 'createdAt'];
    const search = req.query.search;
    const limit = Number(req.query.limit) || 10;
    const page = Number(req.query.page) || 1;
    let response = {
      docs: [],
      page: page,
      limit: limit,
    };
    articelModel.aggregate([
      {
        $match: {
          $and: [
            { isActive: true },
            {
              $or: [
                { 'title': { $regex: new RegExp(search), $options: 'i' } },
                { 'creator': { $regex: new RegExp(search), $options: 'i' } },
                { 'tag': { $regex: new RegExp(search), $options: 'i' } },
              ]
            }
          ],
        }
      },
      { $sort: sorting },
      {
        $facet: {
          total: [
            { $count: 'total' },
          ],
          data: [
            {
              $project: {
                _id: 0,
                id: '$_id',
                title: 1,
                year: 1,
                tag: 1,
                creator: 1,
                link: 1,
                createdAt: 1,
                isActive: 1,
              }
            },
            { $skip: (page - 1) * limit },
            { $limit: limit },
          ],
        },
      },
      {
        $project: {
          total: '$total.total',
          data: '$data',
        },
      }
    ]).then(result => {
      response.docs = result[0].data;
      response.totalItem = result[0].total[0];
      response.totalPage = Math.ceil(response.totalItem / limit);
      response.startItem = (page - 1) * limit;
      response.endItem = response.startItem + result[0].data.length;
      response.nextPage = response.page < response.totalPage ? true : false;
      response.prevPage = response.page > 1 && response.page <= response.totalPage ? true : false;
      resolve(response);
    }).catch(err => {
      reject(err);
    });
  });
};

const readArticel = async (articelId) => {
  return new Promise((resolve, reject) => {
    articelModel.findById(articelId)
      .then(result => {
        if (!result) {
          resolve(false);
        } else {
          resolve(result);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
};

const updateArticel = async (articelId, dataUpdate) => {
  return new Promise((resolve, reject) => {
    let notValid = {};
    articelModel.findByIdAndUpdate(articelId, dataUpdate)
      .then(async (result) => {
        if (!result) {
          resolve(false);
        } else {
          resolve(result);
        }
      })
      .catch(err => {
        // handle error unique key mongoose
        if (err.code === 11000) {
          // edit value in object
          Object.keys(err.keyValue).forEach((key) => {
            notValid[key] = err.keyValue[key] + ' is Already Exist';
          });
          resolve({ status: false, notValid: notValid });
        };
        resolve(false);
      });
  });
};

const deleteArticel = async (articelId) => {
  return new Promise((resolve, reject) => {
    articelModel.findByIdAndDelete(articelId)
      .then(result => {
        if (!result) {
          resolve(false);
        } else {
          resolve(result);
        }
      }).catch(err => {
        reject(err);
      });
  });
};

export default {
  createArticel,
  listArticel,
  readArticel,
  updateArticel,
  deleteArticel
};
