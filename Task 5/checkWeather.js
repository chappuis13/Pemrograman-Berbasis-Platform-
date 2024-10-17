const checkCondition = (weather) => {
  let h = weather["humidity"];
  let t = weather["temperature"];
  let w = weather["windSpeed"];

  if (t >= 20 && t <= 30) {
    if (h > 50) {
      if (w < 15) {
        return `Ideal Contition`;
      }
    }
  }
  return `Not Ideal Condition`;
};
module.exports = { checkCondition };
