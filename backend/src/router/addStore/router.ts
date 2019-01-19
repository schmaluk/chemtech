import { Router } from 'express';
import { controller } from './controller';

export const AddStoreRouter = Router();

AddStoreRouter.get('/add-store', controller);
