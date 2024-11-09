export const cartItemsCounterSubscriber = (cart) => {
  const cartItemsNumber = cart.length;

  document.getElementById("cart-items-counter").innerHTML = cartItemsNumber;
};
