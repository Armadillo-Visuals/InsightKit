// create a router to handle calls to the api
import { Router } from 'express';
const router = Router();
import disastersController from '../controllers/disastersController.js';
import carbonController from '../controllers/carbonController.js';

// endpoint for populating a widget that shows a single disaster type for a single state over time as well as all disaster types
router.get(
  '/disasters-over-time/:state/:type',
  disastersController.getDisastersOverTime,
  (req, res) => {
    return res.status(200).json(res.locals.disastersOverTime);
  },
);

// endpoint for getting carbon emissions for a single state over time
router.get('/carbon-over-time/:state', carbonController.getCarbonOverTime, (req, res) => {
  return res.status(200).json(res.locals.carbonOverTime);
});

// endpoint for populating a pie chart with percentage of each disaster type in a single state 1956-2022
router.get('/disasters-all-time/:state', disastersController.getDisastersAllTime, (req, res) => {
  return res.status(200).json(res.locals.disastersAllTime);
});

export default router;
