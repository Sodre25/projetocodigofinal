import { CartStepper } from "../components/cart-stepper";

export const checkoutLoader = () => {
  const stepper = document.getElementById("stepper");
  stepper.innerHTML = CartStepper({ currentStep: "Checkout" });
};
