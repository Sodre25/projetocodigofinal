import {
  cartItemsCounterSubscriber,
  renderCartItemsSubscriber,
} from "./subscribers";

export const store = new Proxy(
  {
    cart: {
      value: JSON.parse(localStorage.getItem("cart")) || [],
      subscribers: [cartItemsCounterSubscriber, renderCartItemsSubscriber],
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
