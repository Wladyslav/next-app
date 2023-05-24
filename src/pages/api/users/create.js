import dbConnect from '../../../../utils/dbConnect';
import User from '../../../../models/Users';

dbConnect();

const createUser = async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'POST':
      try {
        const { name, email } = req.body;

        // Sprawdź, czy wszystkie wymagane pola są wypełnione
        if (!name || !email) {
          return res.status(400).json({ success: false, message: 'Wszystkie pola są wymagane' });
        }

        const newUser = new User ({ name, email });
        await newUser.save();
        res.status(201).json({ success: true, data: newUser });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};

export default createUser;
