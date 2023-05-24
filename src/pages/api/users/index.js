import dbConnect from '../../../../utils/dbConnect';
import User from '../../../../models/Users';

dbConnect();

const getUsers = async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const users = await User.find({});
        res.status(200).json({ success: true, data: users });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};

export default getUsers;