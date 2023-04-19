
// Create a length converter function

function converter(kilometers) {
  const milesperkm = 0.621371;
  return kilometers* milesperkm;
}
const distanceInKm = 10;
const distanceInMiles  = converter(distanceInKm);
console.log(distanceInMiles);

  