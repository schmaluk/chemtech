import { ObjectID } from 'mongodb';

export type Booking = {
  storeId: ObjectID;
  timeFrom: Date;
  timeTo: Date;
  customer: String;
};
