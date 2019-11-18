import { Router } from 'express';
import Controller from '../controller/user.controller';

const user: Router = Router();
const controller = new Controller();

// Retrieve all Users
user.get('/', controller.findAll);

// Retrieve a Specific User
user.get('/q', controller.findBySingleParam);

// create a User with Id
user.post('/', controller.create);

export default user;
