import { CartStepper } from "../components/cart-stepper";

export const cartLoader = () => {
  const stepper = document.getElementById("stepper");
  stepper.innerHTML = CartStepper({ currentStep: "Cart" });
};
