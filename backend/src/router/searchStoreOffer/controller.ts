import { Request, Response } from 'express';
import { getCollections } from '../../db/getCollection';

export const searchStoreOffers = async (req: Request, res: Response) => {
  const filter = req.body;
  const { storeOfferCollection } = await getCollections();
  const results = await storeOfferCollection.find(filter);
  res.json({
    results,
  });
};
