import { Request, Response } from 'express';
import { getCollections } from '../../db/getCollection';

export const postNewStore = async (req: Request, res: Response) => {
  const newStore = req.body;
  console.log('newStore : ' + JSON.stringify(newStore));
  const { storeCollection } = await getCollections();
  await storeCollection.insertOne(newStore);
  res.json({
    newStore,
  });
};

export const getStores = async (req: Request, res: Response) => {
  const { storeCollection } = await getCollections();
  const results = await storeCollection.find();
  res.json({
    results,
  });
};
