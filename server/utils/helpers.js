// function takes the response from the API and generates an object with years as keys and numbers of disasters as values
export const disastersPerYear = (response) => {
  const stor = {};
  const disasterSummaries = response.data.DisasterDeclarationsSummaries;

  // loop through object and store count by year
  for (let i = 0; i < disasterSummaries.length; i++) {
    const year = disasterSummaries[i].declarationDate.slice(0, 4);
    if (!stor[year]) stor[year] = 1;
    else {
      stor[year] += 1;
    }
  }
  return stor;
};

export const disasterTotals = (response) => {
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
