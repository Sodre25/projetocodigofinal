export const store = new Proxy(
  {
    cart: [],
    item: 0,
  },
  (value1, value2, value3) => {
    console.log({ value1, value2, value3 });
    return true;
  }
);

console.log(store);

store.item = 2;
