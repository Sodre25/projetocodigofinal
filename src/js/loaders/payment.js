import { CartStepper } from "../components/cart-stepper";

export const paymentLoader = () => {
  const stepper = document.getElementById("stepper");
  stepper.innerHTML = CartStepper({ currentStep: "Payment" });
};
