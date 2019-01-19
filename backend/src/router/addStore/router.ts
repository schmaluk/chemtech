import { Router } from 'express';
import * as controller from './controller';

export const AddStoreRouter = Router();

AddStoreRouter.post('/add-store', controller.postNewStore);
AddStoreRouter.get('/add-store', controller.getStores);
