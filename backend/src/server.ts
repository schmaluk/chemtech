import express from 'express';
import { AddStoreOfferRouter } from './router/addStoreOffer/router';
import { AddStoreRouter } from './router/addStore/router';
import { SearchStoreOfferRouter } from './router/searchStoreOffer/router';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(AddStoreOfferRouter);
app.use(AddStoreRouter);
app.use(SearchStoreOfferRouter);

app.listen(8000);
