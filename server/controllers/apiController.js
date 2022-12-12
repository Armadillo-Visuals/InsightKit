const axios = require('axios');
const db = require('../models/carbonModel');

const apiController = {};

const disasterSum = (response) => {
  const stor = {};
  const disasterSummaries = response.data.DisasterDeclarationsSummaries;

  // loop through object and store count by year
  for (let i = 0; i < disasterSummaries.length; i++) {
    const year = disasterSummaries[i].declarationDate.slice(0, 4);
    if (year > '2020' || year < '1970') continue;
    if (!stor[year]) stor[year] = 1;
    else {
      stor[year] += 1;
    }
  }
  return stor;
};

const disasterTotals = (response) => {
  const stor = {};
  const disasterSummaries = response.data.DisasterDeclarationsSummaries;
  for (let i = 0; i < disasterSummaries.length; i++) {
    const disasterType = disasterSummaries[i].incidentType;
    if (
      disasterType === 'Flood' ||
      disasterType === 'Fire' ||
      disasterType === 'Earthquake' ||
      disasterType.toLowerCase().includes('storm') ||
      disasterType === 'Hurricane' ||
      disasterType === 'Tornado' ||
      disasterType === 'Freezing' ||
      disasterType === 'Drought'
    ) {
      if (!stor[disasterType]) stor[disasterType] = 1;
      else {
        stor[disasterType]++;
      }
    }
  }
  return stor;
};

apiController.getData = async (req, res, next) => {
  const { state, type } = req.params;
  try {
    if (type === 'All') {
      const response = await axios.get(
        `https://www.fema.gov/api/open/v2/DisasterDeclarationsSummaries?$filter=state eq '${state}'`,
      );
      res.locals.data = disasterSum(response);
    } else if (type === 'SevereStorms') {
      const response = await axios.get(
        `https://www.fema.gov/api/open/v2/DisasterDeclarationsSummaries/?$filter=(state eq '${state}' and substringof('Storm',incidentType) or substringof('storm',incidentType))`,
      );
      res.locals.data = disasterSum(response);
    } else {
      const response = await axios.get(
        `https://www.fema.gov/api/open/v2/DisasterDeclarationsSummaries?$filter=state eq '${state}' and incidentType eq '${type}'`,
      );
      res.locals.data = disasterSum(response);
    }

    return next();
  } catch (err) {
    return next({
      log: `Error occurred in getAllByState middleware: ${err}`,
      message: { err: 'Unable to get data for requested state' },
    });
  }
};

apiController.getCarbon = (req, res, next) => {
  try {
    // grabs data from sql database
    const state = req.params.state;
    const emissionsData = `
    SELECT "Year" , "${state}" 
    FROM "statecarbonemissions"
    `;
    // const data = db.query(emissionsData, [state], (err, result) => {
    //   console.log(result);
    // });
    db.query(emissionsData, (err, result) => {
      if (err) console.log(err);
      res.locals.carbonData = result.rows;
      return next();
    });
  } catch (err) {
    return next({
      log: `Error occurred in getCarbon middleware: ${err}`,
      message: { err: 'Unable to get data for state carbon emissions' },
    });
  }
};

apiController.getAllDisasters = async (req, res, next) => {
  try {
    const response = await axios.get(
      `https://www.fema.gov/api/open/v2/DisasterDeclarationsSummaries?$filter=state eq '${req.params.state}'`,
    );
    res.locals.allDisasters = disasterTotals(response);
    return next();
  } catch (err) {
    return next({
      log: `Error occurred in getAllDisasters middleware: ${err}`,
      message: { err: 'Unable to get data for state disasters' },
    });
  }
};

module.exports = apiController;
