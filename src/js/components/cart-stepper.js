const steps = ["Cart", "Checkout", "Payment"];

export const CartStepper = ({ currentStep }) => {
  let isCompletedStep = true;

  const stepsOnStepper = steps
    .map((step) => {
      const isLastStep = step === steps[steps.length - 1];
      const href = `/${step.toLocaleLowerCase()}`;

      const otherStepsUI = /*html*/ `
      <li class="after:border-1 flex items-center ${
        isCompletedStep && "text-primary-700"
      } after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
      <a href="/${href}" >
      <span class="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] sm:after:hidden">
        <svg class="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        ${step}
      </span>
      </a>
      </li>
        `;

      const lastStepUI = /*html*/ `
      <li>
        <a href="/${href}" class="flex shrink-0 items-center ${
        isCompletedStep && "text-primary-700"
      }">
        
        <svg class="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      ${step}
        </a>
      </li>
        `;

      const stepUI = isLastStep ? lastStepUI : otherStepsUI;

      if (step === currentStep) {
        isCompletedStep = false;
      }

      return stepUI;
    })
    .join("");

  return /*html*/ `
  <ol
  class="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500  sm:text-base"
>
${stepsOnStepper}
</ol>
  `;
};
