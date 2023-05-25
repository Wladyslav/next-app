// pages/api/attractions/index.js
import dbConnect from '../../../utils/dbConnect';
import Attraction from '../../../models/Attraction';

dbConnect();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const attractions = await Attraction.find({});
        res.status(200).json({ success: true, data: attractions });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const attraction = new Attraction(req.body);
        await attraction.save();
        res.status(201).json({ success: true, data: attraction });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
