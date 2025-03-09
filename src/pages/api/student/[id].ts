// import { NextApiRequest, NextApiResponse } from 'next';
import connectDb from '../db';
import Students, { IStudent } from '../models/Students';
import User, { IUser } from '../models/User';

connectDb();

export default async function handler(req:any, res:any) {
    req.body;
    const userId = req.query.id
    if (req.method==="GET"){
        const userId = req.query.id
        const { motivation, industry, prevIndustry, email, name, hobby}=req.body;
        const studentInfo:any = await User.findById(userId)
        try{
            return res.status(200).json({studentInfo});
        }catch(err){
          const userId = req.query.id
        }
      
      return res.status(405).end();
    }
if (req.method==="PUT"){
    const userId = req.query.id
    const { motivation, industry, prevIndustry, email, name, hobbies, portfolio}=req.body;
    const studentInfo:any = await User.findById(userId)
    try{
      const student = await User.findByIdAndUpdate(
        userId,{
          name: name !==null? name : studentInfo.name, 
          motivation: motivation !==null? motivation : studentInfo.motivation, 
          industry: industry !==null? industry : studentInfo.industry, 
          prevIndustry: prevIndustry !==null? prevIndustry : studentInfo.prevIndustry, 
          email: email !==null? email : studentInfo.email, 
          hobbies: hobbies !==null? hobbies : studentInfo.hobbies,
          portfolio: portfolio !==null? portfolio : studentInfo.portfolio
        }
      )
      const updatedStudent:any = await User.findById(userId)

      return res.status(200).json({updatedStudent});

    }catch(err){
      console.log('issue', err)
    }
  
  return res.status(405).end();
}
if(res.status===404){
  console.log('whys')
}
}