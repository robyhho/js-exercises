let findTheOldest = function(people) {
  let total = 0;
  let oldest = {};
  people.reduce((a,b) => {
    if (a.yearOfDeath === undefined){
      a.yearOfDeath = new Date().getFullYear();
    }
    if ((a.yearOfDeath-a.yearOfBirth) > total){
      total = (a.yearOfDeath-a.yearOfBirth);
      oldest = a;
    }
    return b;
  }, "");
  return oldest;
}

module.exports = findTheOldest
