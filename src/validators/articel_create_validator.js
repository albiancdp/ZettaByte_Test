import { body } from 'express-validator';

export function articel_create_validator() {
  return [
    body('title')
      .notEmpty().withMessage('please input title'),

    body('content')
      .notEmpty().withMessage('please input content'),

    body('year')
      .notEmpty().withMessage('please input year'),

    body('tag')
      .isArray().withMessage('tag must be array')
      .notEmpty().withMessage('please input tag'),

    body('creator')
      .notEmpty().withMessage('please input creator'),

    body('link')
      .notEmpty().withMessage('please input link'),

    body('isActive')
      .isBoolean().withMessage('isActive must be boolean')
      .notEmpty().withMessage('please input isActive'),
  ];
};
