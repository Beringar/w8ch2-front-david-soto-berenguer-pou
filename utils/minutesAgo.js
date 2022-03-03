const minutesAgo = (date) => {
  var diff = Math.abs(new Date(date) - Date.now());
  return Math.floor(diff / 1000 / 60);
};
export default minutesAgo;
