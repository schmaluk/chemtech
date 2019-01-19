import { Router } from 'express';
import * as controller from './controller';

export const AddStoreOfferRouter = Router();

AddStoreOfferRouter.post('/add-store-offer', controller.addStoreOffer);
