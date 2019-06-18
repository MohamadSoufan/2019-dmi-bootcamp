import express from "express";
import axios from "axios";
import mapToInternalModel from "../maps/womensWorldCup";

const scoreboardUri =
  "http://site.api.espn.com/apis/site/v2/sports/soccer/fifa.wwc/scoreboard";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await axios.get(scoreboardUri);
    const data = response.data;
    const mapped = mapToInternalModel(data);

    res.send(mapped);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.toString() });
  }
});

export default router;
