const arr = [
  {
    id: 2,
  },
  {
    id: 1,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
];

console.log(arr);

const b = arr => {
  return arr.filter(item => item.id !== 1);
};

console.log(b(arr));
