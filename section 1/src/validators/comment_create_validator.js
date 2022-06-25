import { body } from 'express-validator';

export function comment_create_validator() {
  return [
    body('articelId')
      .isMongoId().withMessage('please input valid articelId')
      .notEmpty().withMessage('please input articelId'),

    body('name')
      .notEmpty().withMessage('please input name'),

    body('comment')
      .notEmpty().withMessage('please input comment'),
  ];
};
