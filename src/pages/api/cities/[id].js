// pages/api/cities/[id].js
import dbConnect from '../../../../utils/dbConnect';
import City from '../../../../models/City';

dbConnect();

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case 'GET':
      try {
        const city = await City.findById(id);

        if (!city) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: city });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case 'PUT':
      try {
        const city = await City.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });

        if (!city) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: city });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case 'DELETE':
      try {
        const deletedCity = await City.deleteOne({ _id: id });

        if (!deletedCity) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};
