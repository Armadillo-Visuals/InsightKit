const axios = require('axios');

const apiController = {};

apiController.getData = async (req, res, next) => {
  // examples below to use for visualizing/manipulating data
  const stor = {};
  const state = 'CA';
  const disasterType = 'Fire';
  // const state = req.params.state;
  // const disasterType = req.params.type;

  try {
    // if (disasterType === 'all') {
    //   const data = await axios.get(`https://www.fema.gov/api/open/v2/DisasterDeclarationsSummaries?$filter=state eq '${state}'`);
    // } else {
    //   const data = await axios.get(`https://www.fema.gov/api/open/v2/DisasterDeclarationsSummaries?$filter=state eq '${state}' and incidentType eq '${disasterType}'`);
    // }
    const data = await axios.get(
      `https://www.fema.gov/api/open/v2/DisasterDeclarationsSummaries?$filter=state eq '${state}' and incidentType eq '${disasterType}'`,
    );
    const disasterSummaries = data.data.DisasterDeclarationsSummaries;
    // loop through object and store count by year
    for (let i = 0; i < disasterSummaries.length; i++) {
      const year = disasterSummaries[i].declarationDate.slice(0, 4);
      if (!stor[year]) stor[year] = 1;
      else {
        stor[year] += 1;
      }
    }

    // store parsed data in res locals object
    res.locals.data = stor;
    return next();
  } catch (err) {
    return next({
      log: 'Error found in apiController.getData: ',
      err,
      message: { err: 'Error in apiController.getData. Check log for details' },
    });
  }
};

module.exports = apiController;
