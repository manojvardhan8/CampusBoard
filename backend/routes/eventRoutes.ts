import express from 'express';
import { createEvent, getEvents,getRecentEvents,getEventbyId } from '../controllers/eventController';
const router = express.Router();
router.post('/create', createEvent);
router.get('/', getEvents);
router.get('/event/:id',getEventbyId)
router.get('/recent',getRecentEvents);

export default router;