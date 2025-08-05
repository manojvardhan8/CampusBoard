import express from 'express';
import { createNotice, getNotices, getRecentNotices } from '../controllers/noticeController';
const router = express.Router();
router.post('/create', createNotice);
router.get('/', getNotices);
router.get('/recent',getRecentNotices);
export default router;