const julia = [3, 5, 2, 12, 7];
const katie = [4, 1, 15, 8, 3];

const checkDogs = function (arr1, arr2) {
  const newJulia = arr1;
  newJulia.splice(0, -1, -2);
  const arr = newJulia.concat(arr2);
  arr.forEach(function (dog, i) {
    if (dog >= 3) console.log(`Dog number ${i} is an adult`);
    else console.log(`Dog number ${i} is still a puppy`);
  });
};
checkDogs(julia, katie);

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(function (age, i) {
    if (age <= 2) return 2 * age;
    else return 16 + 4 * age;
  });
  const final = humanAges.reduce((acc, mov) => acc + mov, 0);
  return final / ages.length;
};
const test1 = [5, 2, 4, 1, 15, 8, 3];
const test2 = [16, 6, 10, 5, 6, 1, 4];
console.log(calcAverageHumanAge(test1));
console.log(calcAverageHumanAge(test2));
