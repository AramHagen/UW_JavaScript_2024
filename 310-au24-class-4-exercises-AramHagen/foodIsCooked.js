/**
 * Determines whether meat temperature is high enough
 * @param {string} kind 
 * @param {number} internalTemp 
 * @param {string} doneness
 * @returns {boolean} isCooked
 */
const foodIsCooked = function(kind, internalTemp, doneness) {
  const tempThresholds = {
    chicken: 165,
    beef: {
      rare: 125,
      medium: 135,
      well: 155,
    },
  };
  if (kind === 'chicken') {
    return internalTemp > tempThresholds.chicken;
  } else if (kind === 'beef' && tempThresholds.beef[doneness]) {
    return internalTemp > tempThresholds.beef[doneness];
  }
  return false;
}



// Test function
console.log(foodIsCooked('chicken', 90)); // should be false
console.log(foodIsCooked('chicken', 190)); // should be true
console.log(foodIsCooked('beef', 138, 'well')); // should be false
console.log(foodIsCooked('beef', 138, 'medium')); // should be true
console.log(foodIsCooked('beef', 138, 'rare')); // should be true