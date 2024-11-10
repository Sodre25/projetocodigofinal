import { formatPrice } from "../utils";

export const CartItems = ({ cart }) => {
  const cartItems = cart
    .map(({ id, name, size, category, price, quantity }) => {
      return /*html*/ `
    <div
    class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6"
  >
    <div
      class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0"
    >
      <img
        class="h-20 w-auto"
        src="/products/${id}.png"
        alt="imac image"
      />

      <div
        class="flex items-center justify-between md:order-3 md:justify-end"
      >
        <form class="flex items-center quantity-product-form">
          <input type="hidden" name="id" value="${id}" />
          <input type="hidden" name="size" value="${size}" />
          <button
            type="submit"
            value="decrease"
            class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
          >
            <svg
              class="h-2.5 w-2.5 text-gray-900"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 2"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h16"
              />
            </svg>
          </button>
          <input
            type="text"
            class="w-11 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0"
            value="${quantity}"
            required
            disabled
          />
          <button
            type="submit"
            value="increase"  
            class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
          >
            <svg
              class="h-2.5 w-2.5 text-gray-900"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </button>
        </form>
        <div class="text-end md:order-4 md:w-32">
          <p class="text-base font-bold text-gray-900">
            ${formatPrice(Number(price))}
          </p>
        </div>
      </div>

      <div
        class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md"
      >
        <div class="flex items-center justify-between gap-4">
          <span class="text-base font-medium text-gray-900"
            >${name} - ${size}
          </span>
          <span
            class="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 uppercase"
          >
            ${category}
          </span>
        </div>

        <form class="flex items-center gap-4 remove-product-form">
          <input type="hidden" name="id" value="${id}" />
          <input type="hidden" name="size" value="${size}" />

          <button
            type="submit"
            class="inline-flex items-center text-sm font-medium text-red-600 hover:underline"
          >
            <svg
              class="me-1.5 h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18 17.94 6M18 18 6.06 6"
              />
            </svg>
            Remove
          </button>
        </form>
      </div>
    </div>
  </div>

      `;
    })
    .join("");

  return /*html*/ `
<div class="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
    <div class="space-y-6">${cartItems}</div>
</div>
`;
};
