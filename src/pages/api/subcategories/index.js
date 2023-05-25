import dbConnect from '../../../../utils/dbConnect';
import Subcategory from '../../../../models/Subcategory';

dbConnect();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const subcategories = await Subcategory.find({}).populate('category');
        res.status(200).json({ success: true, data: subcategories });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    case 'POST':
      try {
        const subcategory = await Subcategory.create(req.body);
        res.status(201).json({ success: true, data: subcategory });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
