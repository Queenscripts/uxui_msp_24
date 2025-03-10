import connectDb from './db';
import User, { IUser } from './models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

connectDb();

export default async function POST(req:any, res:any) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      // Check if user exists
      const user: any = await User.findOne({ email });
      // if (!user) {
      //   return res.status(404).json({ error: 'User not found' });
      // }

      // // Compare passwords
      // const passwordMatch = await bcrypt.compare(password, user.password);
      // if (!passwordMatch) {
      //   return res.status(401).json({ error: 'Invalid password' });
      // }
      // Generate a JWT token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET as any, {
        expiresIn: '1h', // Token expires in 1 hour, adjust as needed
      });

      return res.status(200).json({ user,token });
    } catch (error) {
      console.error('Error logging in user:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  // return res.status(405).end();
}