// import { NextApiRequest, NextApiResponse } from 'next';
import connectDb from './db';
import Glossary, { IGlossary} from './models/Glossary';


connectDb();

export default async function handler(req:any, res:any) {
    if (req.method==="GET"){
        // const userId = req.query.id
        // console.log(userId, 'USER')
        // const { motivation, industry, prevIndustry, email, name, hobby}=req.body;
        const glossaryItems:any = await Glossary.find()
        try{
            return res.status(200).json({glossaryItems});
        }catch(err){
        //   const userId = req.query.id
        //   console.log(userId, 'USER')
          console.log('issue', err)
        }
      
      return res.status(405).end();
    }
  if (req.method === 'POST') {
    const { name, topic, description, tag, resource } = req.body;

    try {

      const glossary: IGlossary = await Glossary.create({ name, topic, description, tag, resource});

      // Check if user already exists
    //   const existingUser:any = await User.findOne({ email });
    //   if (existingUser) {
    //     return res.status(400).json({ error: 'User already exists' });
    //   }
    if(await glossary){
      return res.status(200).json(glossary)
    }

    return res.status(400).json({ error: 'Issue with glossary' });

    } catch (error) {
      console.error('Error signing up user:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

}