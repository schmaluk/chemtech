import { Router } from 'express';
import * as controller from './controller';

export const SearchStoreOfferRouter = Router();

SearchStoreOfferRouter.get(
  '/search-store-offers',
  controller.searchStoreOffers
);
