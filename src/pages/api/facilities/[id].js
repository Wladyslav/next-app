// pages/api/facilities/[id].js
import dbConnect from '../../../../utils/dbConnect';
import Facility from '../../../../models/Facility';

dbConnect();

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  switch (method) {
    case 'GET':
      try {
        const facility = await Facility.findById(id).populate('city');
        if (!facility) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: facility });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        const facility = await Facility.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!facility) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: facility });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'DELETE':
      try {
        const deletedFacility = await Facility.deleteOne({ _id: id });
        if (!deletedFacility) {
          return res.status(400).json({ success: false });
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
