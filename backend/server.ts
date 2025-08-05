import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import userRoutes from './routes/userRoutes';
import cors from 'cors';
import noticeRoutes from './routes/noticeRoutes';
import eventRoutes from './routes/eventRoutes';
dotenv.config();
const app = express();
app.use(express.json());
connectDB();
app.use(cors());
app.get('/', (_req: any, res: { send: (arg0: string) => void; }) => {
  res.send('Backend working!');
});
app.use('/api/users', userRoutes);
app.use('/api/notices', noticeRoutes);
app.use('/api/events',eventRoutes);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));


