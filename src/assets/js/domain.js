export const hourlyToUi = (res) => {
  const { data } = res;
  const hours = data['24hours'].reduce((hours, hour) => {
    hours[hour.date] = hour.values.reduce((values, value) => {
      const key = Object.keys(value)[0];
      values[data.units[key].name] = {
        value: value[key],
        unit: data.units[key].unit
      };
      return values;
    }, {})
    return hours;
  }, {});


  console.log('data', data);
  return hours;
};
