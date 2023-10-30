import carbonDB from '../models/carbonModel.js';

const carbonController = {};

// gets carbon emissions per year for requested state from database
carbonController.getCarbonOverTime = async (req, res, next) => {
  try {
    const { state } = req.params;
    const carbonQuery = `
    SELECT "Year" , "${state}" 
    FROM "statecarbonemissions"
    `;

    const { rows } = await carbonDB.query(carbonQuery);
    res.locals.carbonOverTime = rows;
    return next();
  } catch (err) {
    return next({
      log: `Error occurred in getCarbonOverTime middleware: ${err}`,
      message: { err: 'Unable to get data for state carbon emissions' },
    });
  }
};

export default carbonController;
