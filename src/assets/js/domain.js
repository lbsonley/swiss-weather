import labels from './labels';

export const hourlyToUi = (res) => {
  const { data } = res;
  const { info, date } = data;

  const forecasts = data['24hours'].map(hour => {
    return hour.values.reduce((forecasts, observation) => {
      const key = Object.keys(observation)[0];
      forecasts[data.units[key].name] = {
        label: labels[key],
        value: observation[key],
        unit: data.units[key].unit
      }
      return forecasts;
    }, { date: hour.date })
  })

  return {
    [info.id]: {
      name: info.name.de,
      date,
      forecasts
    }
  };

  // return locationData;

  // const hours = data['24hours'].reduce((hours, hour) => {
  //   hours[hour.date] = hour.values.reduce((values, value) => {
  //     const key = Object.keys(value)[0];
  //     values[data.units[key].name] = {
  //       value: value[key],
  //       unit: data.units[key].unit
  //     };
  //     return values;
  //   }, {})
  //   return hours;
  // }, {});

  // return hours;
};
