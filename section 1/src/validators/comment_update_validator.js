import { body } from 'express-validator';

export function comment_update_validator() {
  return [
    body('id')
      .notEmpty().withMessage('please input id')
      .isMongoId().withMessage('please input valid id'),
  ];
};
