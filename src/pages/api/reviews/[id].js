// pages/api/reviews/[id].js
import dbConnect from '../../../../utils/dbConnect';
import Review from '../../../../models/Review';

dbConnect();

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  switch (method) {
    case 'GET':
      try {
        const review = await Review.findById(id).populate('user').populate('attraction');

        if (!review) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: review });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        const review = await Review.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        }).populate('user').populate('attraction');

        if (!review) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: review });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'DELETE':
      try {
        const deletedReview = await Review.deleteOne({ _id: id });

        if (!deletedReview) {
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
