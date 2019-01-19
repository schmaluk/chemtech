import express from 'express';
import { AddStoreOfferRouter } from './router/addStoreOffer/router';
import { AddStoreRouter } from './router/addStore/router';
import { SearchStoreOfferRouter } from './router/searchStoreOffer/router';

const app = express();

app.use(AddStoreOfferRouter);
app.use(AddStoreRouter);
app.use(SearchStoreOfferRouter);

app.listen(8000);
