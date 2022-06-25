import { param } from 'express-validator';

export function id_validator() {
  return [
    param('id')
      .notEmpty().withMessage('please input id')
      .isMongoId().withMessage('please input invalid id'),
  ];
};
