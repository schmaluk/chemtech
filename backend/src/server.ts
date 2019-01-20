import express from 'express';
import { AddStoreOfferRouter } from './router/addStoreOffer/router';
import { AddStoreRouter } from './router/addStore/router';
import { SearchStoreOfferRouter } from './router/searchStoreOffer/router';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(AddStoreOfferRouter);
app.use(AddStoreRouter);
app.use(SearchStoreOfferRouter);

app.listen(8000);
