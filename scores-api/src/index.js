import express from 'express';
import cors from 'cors';
import mlbScoresRouter from './routes/mlbScores';
import soccerScoresRouter from './routes/epl';
import womensWorldCupRouter from './routes/womensWorldCup';

const app = express();
app.use(cors());

app.use('/scores/soccer/epl', soccerScoresRouter);
app.use('/scores/soccer/epl/:id', soccerScoresRouter);
app.use('/scores/mlb', mlbScoresRouter);
app.use('/scores/mlb/:id', mlbScoresRouter);
app.use('/scores/wwc', womensWorldCupRouter);
app.use('/scores/wwc/:id', womensWorldCupRouter);

app.listen(3000, () => console.log('App listening on port 3000'));
