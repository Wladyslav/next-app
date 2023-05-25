// pages/api/facilities/index.js
import dbConnect from '../../../../utils/dbConnect';
import Facility from '../../../../models/Facility';

dbConnect();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const facilities = await Facility.find({}).populate('city');
        res.status(200).json({ success: true, data: facilities });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const facility = await Facility.create(req.body);
        res.status(201).json({ success: true, data: facility });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
