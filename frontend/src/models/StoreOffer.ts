import { ObjectID } from 'mongodb';

export type StoreOffer = {
  storeId: ObjectID;
  timeFrom: Date;
  timeTo: Date;
  customer: string;
};
