import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Marx Roberto',
    email: 'marxmoita@gmail.com',
    password_hash: '123456789',
  });

  res.json(user);
});

export default routes;
