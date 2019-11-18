import { Router } from 'express';
import users from './userRoutes';

const router: Router = Router();
router.use('/user', users);

export default router;
