import { MongoClient } from 'mongodb';
import { Store } from '../models/Store';
import { StoreOffer } from '../models/StoreOffer';
import { Booking } from '../models/Booking';

export const getCollections = async () => {
  const client = await MongoClient.connect(
    'mongodb://localhost:27017',
    { useNewUrlParser: true }
  );
  const db = client.db('chemtech');
  return {
    storeCollection: db.collection<Store>('store'),
    storeOfferCollection: db.collection<StoreOffer>('storeOffer'),
    bookingCollection: db.collection<Booking>('booking'),
  };
};
