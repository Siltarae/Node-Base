const arr = [1, 2, 3, 4, 5];

const foreachArr = arr.forEach((a, b, c) => {
  return a * 2;
});

const mapArr = arr.map((a, b, c) => {
  return a * 2;
});

console.log(`foreach : ${foreachArr}, map : ${mapArr}`);
