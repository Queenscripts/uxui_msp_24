// import { NextApiRequest, NextApiResponse } from 'next';
import connectDb from './db';
import Students, { IStudent } from './models/Students';
import User, { IUser } from './models/User';

connectDb();

export default async function handler(req:any, res:any) {
  if (req.method === 'POST') {
 req.body;

    try {
     const students= await Students.insertMany(req.body)

      return res.status(200).json({ students });
    } catch (error) {
      console.error('Error logging in user:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  if (req.method === 'GET') {
    req.body;
   
       try {
        const students= await User.find({})
   
         return res.status(200).json({ students });
       } catch (error) {
         console.error('Error logging in user:', error);
         return res.status(500).json({ error: 'Internal server error' });
       }
     }

}