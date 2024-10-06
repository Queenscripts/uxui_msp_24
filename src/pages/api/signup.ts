// import { NextApiRequest, NextApiResponse } from 'next';
import connectDb from './db';
import User, { IUser } from './models/User';
import Students from './models/Students';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

connectDb();

export default async function handler(req:any, res:any) {
  if (req.method === 'PUT') {
    const { email, password , github, name, motivation, location, portfolio, os, hobbies, industry, prevIndustry} = req.body;
    const isStudent = async (email:string)=>{
        const students = await Students.find({})
        const arr = students.filter(learner=> learner.email==email)
        if(arr.length>0){
            return true
        }
        return false
    }
    try {

         // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create the user in the database
      const user: IUser = await User.create({ email, password: hashedPassword, github, name, motivation, location, portfolio, os, hobbies, industry, prevIndustry});

      // Generate a JWT token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET as any, {
        expiresIn: '1h', // Token expires in 1 hour, adjust as needed
      });
      // Check if user already exists
    //   const existingUser:any = await User.findOne({ email });
    //   if (existingUser) {
    //     return res.status(400).json({ error: 'User already exists' });
    //   }
    if(await isStudent(email)){
      return res.status(200).json({token, user})
    }

    return res.status(400).json({ error: 'Your email is not in the list of emails registered for course' });

    } catch (error) {
      console.error('Error signing up user:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
    return res.status(200).end();

}