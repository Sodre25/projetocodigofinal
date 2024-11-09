import { cartItemsCounterSubscriber } from "./subscribers";

export let store = null;

export const initStore = () => {
  store = new Proxy(
    {
      cart: {
        value: null,
        subscribers: [cartItemsCounterSubscriber],
      },
    },
    {
      get(target, key) {
        return target[key].value;
      },
      set(target, key, value) {
        target[key].subscribers.forEach((subscriber) => subscriber(value));
        target[key].value = value;
        localStorage.setItem(key, JSON.stringify(value));
        return true;
      },
    }
  );

  store.cart = JSON.parse(localStorage.getItem("cart")) || [];
};
