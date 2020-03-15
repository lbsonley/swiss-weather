export const getHours = (hour) => {
  const date = new Date(hour);
  const hours = date.getHours();
  let minutes = date.getMinutes();
  minutes = minutes.toString().length < 2 ? `0${minutes}` : minutes;
  return `${hours}:${minutes}`;
};
