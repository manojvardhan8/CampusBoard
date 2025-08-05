
import { Request, Response } from 'express';
import Event from '../models/eventModel';

export const createEvent = async (req: Request, res: Response) => {
  const { title,description,date,location,registeredUsers,createdBy} = req.body;
  console.log("Creating event with data:", req.body);
  try {
    const newEvent = new Event({title,description,date,location,registeredUsers,createdBy});
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (err) {
    console.log("Error creating event:", err);
    res.status(500).json({ error: 'Failed to create event' });
  }
}
export const getEvents = async (req: Request, res: Response) => {
  try {
    const events = await Event.find();
    console.log(events);
    res.json(events);
    //res.send(events);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch events' });
  }
}

export const getRecentEvents= async(req: Request,res:Response) =>{
  try{
    const recentEvents=await Event.aggregate([{
      $sort:{
        date: -1
      }
    },{
      $limit:4
    }])
    res.json(recentEvents);
  }
  catch(err){
    console.log("something wrong");
    res.status(500).json({error:"cannot retrieve 4 documens"});
  }
}