import { DELIVERY_FEE, VAT_RATE } from "../constants";
import { formatPrice } from "../utils";

export const OrderSummary = ({ cart, action }) => {
  const total = cart.reduce((acc, { price, quantity }) => {
    return acc + Number(price) * Number(quantity);
  }, 0);
  const tax = total * VAT_RATE;

  const globalTotal = total + DELIVERY_FEE + tax;

  const buttonAction = action
    ? /*html*/ `
  <a
      href="${action.href}"
      class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
      >Proceed to ${action.page}</a
    >
  `
    : "";

  return /*html*/ `
  <div
    class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6"
  >
    <p class="text-xl font-semibold text-gray-900">
      Order summary
    </p>

    <div class="space-y-4">
      <div class="space-y-2">
        <dl class="flex items-center justify-between gap-4">
          <dt class="text-base font-normal text-gray-500">
            Original price
          </dt>
          <dd class="text-base font-medium text-gray-900">
            ${formatPrice(total)}
          </dd>
        </dl>

        <dl class="flex items-center justify-between gap-4">
          <dt class="text-base font-normal text-gray-500">
            Delivery Fee
          </dt>
          <dd class="text-base font-medium text-gray-900">${formatPrice(
            DELIVERY_FEE
          )}</dd>
        </dl>

        <dl class="flex items-center justify-between gap-4">
          <dt class="text-base font-normal text-gray-500">Tax</dt>
          <dd class="text-base font-medium text-gray-900">
            ${formatPrice(tax)}
          </dd>
        </dl>
      </div>

      <dl
        class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2"
      >
        <dt class="text-base font-bold text-gray-900">Total</dt>
        <dd class="text-base font-bold text-gray-900">
          ${formatPrice(globalTotal)}
        </dd>
      </dl>
    </div>

    
    ${buttonAction}
  </div>
`;
};
