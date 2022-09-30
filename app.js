// HW below:
function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function (num) {
    return num % 2 === 0;
  });
}

//ES2015 version:
const filterOdds = (...nums) => nums.filter((el) => el % 2 === 0);

//find min:

const findMin = (...nums) => nums.reduce((acc, num) => (acc < num ? acc : num));
//alternative min
const findMin2 = (...nums) => Math.min(...nums);

//merge Objects

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

// doubleAndReturnArgs

const doubleAndReturnArgs = (arr, ...nums) => {
  const tempArr = nums.map((num) => num * 2);
  return [...arr, ...tempArr];
};

//better
const doubleAndReturnArgs2 = (arr, ...args) => [...arr, ...args.map((v) => v * 2)];

// Slice and Dice!

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
  const length = items.length;
  const randomIdx = Math.floor(Math.random() * length);
  const tempArr = [...items];
  tempArr.splice(randomIdx, 1);
  return tempArr;
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
  return [...array1, ...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
  const newObj = { ...obj };
  newObj[key] = val;
  return newObj;
}

/** Return a new object with a key removed. */

function removeKey(obj, key) {
  const newObj = { ...obj };
  delete newObj[key];
  return newObj;
}

/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
  const newObj = { ...obj1, ...obj2 };
  return newObj;
}

/** Return a new object with a modified key and value. */

function update(obj, key, val) {
  const newObj = { ...obj };
  newObj[key] = val;
  return newObj;
}

// oops below. only double the nums
// const doubleAndReturnArgs = (arr, ...nums) => {
//   const tempArr = [...arr, ...nums];
//   return tempArr.map((num) => num * num);
// };

// const max = function () {
//   const args = Array.from(arguments);
//   return args.reduce((acc, el) => {
//     return acc > el ? acc : el;
//   });
// };

// const sum2 = (...nums) => nums.reduce((sum, n) => sum + n);
// function sum(...nums) {
//   return nums.reduce((sum, n) => sum + n);
// }

// function sum3(arr) {
//   return arr.reduce(function (accum, el) {
//     return accum + el;
//   });
// }

// const sumAll = (...values) => {
//   console.log(`whatsup`);
//   if (!values.length) return undefined;
//   return values.reduce((acc, el) => acc + el);
// };

// function makeFamily(parent1, parent2, ...kids) {
//   // console.log(parent1, parent2);
//   // console.log(kids);
//   return {
//     parents: [parent1, parent2],
//     children: kids.length ? kids : 0,
//   };
// }

// const tea = {
//   type: `oolong`,
//   name: `winter sprout`,
//   origin: `taiwan`,
// };

// // const tea2 = { ...tea, price: 22.99 };

// // const newTea = { name: `golden frost`, ...tea };

// // const newTea = { ...tea, name: "golden frost" };
// const newTea = { name: `golden frost`, ...tea };

// const teaData = {
//   steepTime: `30s`,
//   brewTemp: 175,
//   origin: `Japan`,
// };

// const fullTea = { ...tea, ...teaData, origin: `China` };

// // filterByType(`number`, 1, 2, 3, `a`, true);

// // function filterByType(type, ...rest) {
// //   return rest.filter((el) => el.typeof === type);
// // }

// // const filterByType = (type, ...data) => {
// //   return data.filter((el) => typeof el === type);
// // };

// const filterByType = (type, ...data) => data.filter((el) => typeof el === type);

// // makeFamily(`cindy`, `peter`, `cody`, `carly`);

// // function extractValue(arr, key) {
// //   return arr.reduce(function (acc, nextObj) {
// //     acc.push(nextObj[key]);
// //     return acc;
// //   }, []);
// // }
