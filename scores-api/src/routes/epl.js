import express from 'express';
import axios from 'axios';
import mapToInternalModel from '../maps/mlb';
import mapGameToInternalModel from '../maps/mlbGame';

const soccerScoresUri =
  'http://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard';
const soccerGameSummaryUri =
  'http://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/summary?event=';
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const date = req.query.date;
    const getAllScoresUri = !!date
      ? `${soccerScoresUri}?dates=${date}`
      : soccerScoresUri;
    const response = await axios.get(getAllScoresUri);
    const data = response.data;
    const mapped = mapToInternalModel(data);

    res.send(mapped);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.toString() });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const gameUri = soccerGameSummaryUri + req.params.id;
    const response = await axios.get(gameUri);
    const data = response.data;
    const mapped = mapGameToInternalModel(data);

    res.send(mapped);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.toString() });
  }
});

export default router;
