import dbConnect from '../../../../utils/dbConnect';
import Subcategory from '../../../../models/Subcategory';

dbConnect();

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  switch (method) {
    case 'GET':
      try {
        const subcategory = await Subcategory.findById(id).populate('category');

        if (!subcategory) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: subcategory });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case 'PUT':
      try {
        const subcategory = await Subcategory.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });

        if (!subcategory) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: subcategory });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case 'DELETE':
      try {
        const deletedSubcategory = await Subcategory.deleteOne({ _id: id });

        if (!deletedSubcategory) {
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
