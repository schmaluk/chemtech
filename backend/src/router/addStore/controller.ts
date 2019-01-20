import { Request, Response } from 'express';
import { getCollections } from '../../db/getCollection';

export const postNewStore = async (req: Request, res: Response) => {
  console.log('newStore : ' + JSON.stringify(req.body));
  const newStore = req.body;
  const { storeCollection } = await getCollections();
  await storeCollection.insertOne(newStore);
  return res.json({
    newStore,
  });
};

export const getStores = async (req: Request, res: Response) => {
  const { storeCollection } = await getCollections();
  const results = await storeCollection.find().toArray();
  console.log('results : ' + JSON.stringify(results));
  return res.json({
    results: results.map((v: any) => v),
  });
};
