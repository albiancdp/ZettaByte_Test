const defaults = async (req, res) => {
  res.status(200).send({ message: 'Hello World!', description: 'Articel Rest Api' });
};

export default defaults;
