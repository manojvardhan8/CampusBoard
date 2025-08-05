
import { Request, Response } from 'express';
import notice from '../models/noticeModel';

export const createNotice = async (req: Request, res: Response) => {
  const { title,content ,category, postBy} = req.body;
  console.log("Creating notice with data:", req.body);
  try {
    const newNotice = new notice({ title, content,category, postBy });
    await newNotice.save();
    res.status(201).json(newNotice);
  } catch (err) {
    console.log("Error creating notice:", err);
    res.status(500).json({ error: 'Failed to create notice' });
  }
}
export const getNotices = async (req: Request, res: Response) => {
  try {
    const notices = await notice.find();
    res.json(notices);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch notices' });
  }
}
export const getRecentNotices = async (req: Request,res :Response)=>{
  try{
    const recentNotices = await notice.aggregate([{
      $sort:{
        createdAt: -1
      }
    },{
      $limit : 4
    }])
    res.json(recentNotices);
  }
  catch(err){
    res.status(500).json({error:'something wrong'});
  }
}
// export const getNoticesForPagination = async (req:Request,res:Response)=>{
//   try{
//     const notices=await notice.aggregate([{

//     }])
//   }
//   catch(err){
//     res.status(500).json({error:'something went wrong'});
//   }
// }