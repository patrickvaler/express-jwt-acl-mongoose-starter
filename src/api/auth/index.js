import express from 'express';
import ctrl from './auth.ctrl';

export default () => {
  const router = express.Router();

  router.route('/signup').post(ctrl.signup);

  router.route('/login').post(ctrl.login);

  return router;
};
