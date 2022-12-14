const axios = require('axios');
const db = require('../models/carbonModel');
const { disastersPerYear, disasterTotals } = require('../utils/helpers');

const disastersController = {};

// middleware function that gets a single disaster type or all disaster types each year for one state
// getting data from the FEMA api which stores the requested information
// expects as url params a state abbreviation (ex: 'NY') and disaster type (capitalized) or 'All' for all disasters
disastersController.getDisastersOverTime = async (req, res, next) => {
  try {
    const { state, type } = req.params;
    if (type === 'All') {
      const response = await axios.get(
        `https://www.fema.gov/api/open/v2/DisasterDeclarationsSummaries?$filter=state eq '${state}'`,
      );
      res.locals.disastersOverTime = disastersPerYear(response);
    } else {
      const response = await axios.get(
        `https://www.fema.gov/api/open/v2/DisasterDeclarationsSummaries/?$filter=(state eq '${state}' and substringof('${type}',incidentType))`,
      );
      res.locals.disastersOverTime = disastersPerYear(response);
    }
    return next();
  } catch (err) {
    return next({
      log: `Error occurred in disastersOverTime middleware: ${err}`,
      message: { err: 'Unable to get disaster over time for specified state' },
    });
  }
};

// middleware that gets counts of each disaster type for a single state 1956-2022
disastersController.getDisastersAllTime = async (req, res, next) => {
  try {
    const response = await axios.get(
      `https://www.fema.gov/api/open/v2/DisasterDeclarationsSummaries?$filter=state eq '${req.params.state}'`,
    );
    res.locals.disastersAllTime = disasterTotals(response);
    return next();
  } catch (err) {
    return next({
      log: `Error occurred in getDisastersAllTime middleware: ${err}`,
      message: { err: 'Unable to get data for state disasters' },
    });
  }
};

module.exports = disastersController;
