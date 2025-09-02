
import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import progressRoutes from './routes/progress.js';
import mindmapRoutes from './routes/mindmap.js';
import patternRoutes from './routes/pattern.js';
import statsRoutes from './routes/stats.js';
import userRoutes from './routes/user.js';

const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/auth', authRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/mindmap', mindmapRoutes);
app.use('/api/pattern', patternRoutes);
app.use('/api/stats', statsRoutes);
app.use('/api/user', userRoutes);

export default app;
