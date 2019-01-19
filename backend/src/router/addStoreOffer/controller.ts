import { Request, Response } from 'express';
import { getCollections } from '../../db/getCollection';

export const addStoreOffer = async (req: Request, res: Response) => {
  const storeOffer = req.body;
  const { storeCollection } = await getCollections();
  await storeCollection.insertOne(storeOffer);
  return {
    storeOffer,
  };
};
