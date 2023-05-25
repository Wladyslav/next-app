// pages/api/attractions/[id].js
import dbConnect from '../../../utils/dbConnect';
import Attraction from '../../../models/Attraction';

dbConnect();

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case 'GET':
      try {
        const attraction = await Attraction.findById(id);
        if (!attraction) {
          return res.status(404).json({ success: false });
        }
        res.status(200).json({ success: true, data: attraction });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        const attraction = await Attraction.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!attraction) {
          return res.status(404).json({ success: false });
        }
        res.status(200).json({ success: true, data: attraction });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'DELETE':
      try {
        const deletedAttraction = await Attraction.deleteOne({ _id: id });
        if (!deletedAttraction) {
          return res.status(404).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
