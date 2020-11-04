'use strict';

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const shuffle = (someArray) => {
  for (let i = someArray.length - 1; i > 0; i--) {
    const randomPosition = Math.floor(Math.random() * i);
    [someArray[i], someArray[randomPosition]] = [someArray[randomPosition], someArray[i]];
  }

  return someArray;
};

const getRandomArray = (array) => {
  const randomLength = getRandomInt(1, array.length - 1);
  let copiedArray = array.slice(); // чтобы не запортить исходный массив - т.к. shuffle его перемешает
  copiedArray = shuffle(copiedArray);
  return copiedArray.slice(0, randomLength);
};

module.exports = {
  getRandomInt,
  shuffle,
  getRandomArray,
};
