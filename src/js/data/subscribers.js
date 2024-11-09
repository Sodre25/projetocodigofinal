import { CartItems } from "../components/cart-items";
import { store } from "./store";

export const cartItemsCounterSubscriber = (cart) => {
  const cartItemsCounterElement = document.getElementById("cart-items-counter");
  if (!cartItemsCounterElement) return;

  const cartItemsNumber = cart.length;
  cartItemsCounterElement.innerHTML = cartItemsNumber;
};

export const renderCartItemsSubscriber = (cart) => {
  const cartItems = document.getElementById("cart-items");
  if (!cartItems) return;

  cartItems.innerHTML = CartItems({ cart });

  const removeProductForm = document.querySelectorAll(".remove-product-form");
  removeProductForm.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const productId = formData.get("id");
      const productSize = formData.get("size");

      const newCart = store.cart.filter(
        ({ id, size }) => id !== productId || size !== productSize
      );

      store.cart = newCart;
    });
  });

  document.querySelectorAll(".quantity-product-form").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const productId = formData.get("id");
      const productSize = formData.get("size");
      const action = e.submitter.value;

      const productIndex = store.cart.findIndex(
        ({ id, size }) => id === productId && size === productSize
      );

      if (productIndex === -1) return;

      const product = store.cart[productIndex];
      const isIncrease = action === "increase";
      const isDecrease = action === "decrease";

      if (isIncrease) {
        product.quantity++;
      }

      if (isDecrease && product.quantity > 1) {
        product.quantity--;
      }

      store.cart = [...store.cart];
    });
  });
};
