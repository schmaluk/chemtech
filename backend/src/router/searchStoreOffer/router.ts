import { Router } from 'express';
import { controller } from './controller';

export const SearchStoreOfferRouter = Router();

SearchStoreOfferRouter.get('/add-store-offer', controller);
