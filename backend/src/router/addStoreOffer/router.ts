import { Router } from 'express';
import { controller } from './controller';

export const AddStoreOfferRouter = Router();

AddStoreOfferRouter.get('/add-store-offer', controller);
