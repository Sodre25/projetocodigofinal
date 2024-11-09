import { ModalProducInfo } from "./modal";

export const ProductsSection = ({ products }) => {
  const productsCards = products
    .map((product, index) => {
      const { id, name, price, sizes, details, category } = product;
      const modalId = `readProductModal-${name}-${index}`;
      const buttonModalId = `readProductButton-${name}-${index}`;
      const imageSrc = `/products/${id}.png`;

      return /*html*/ `
        <form
        id="product-form-${id}"
        class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm "
      >
      <div class="hidden">
        <input type="hidden" name="id" value="${id}" />
        <input type="hidden" name="name" value="${name}" />
        <input type="hidden" name="price" value="${price}" />
        <input type="hidden" name="details" value="${details}" />
        <input type="hidden" name="category" value="${category}" />
      </div>
        <div class="h-80 w-full">
          <a
            id="${buttonModalId}"
            data-modal-target="${modalId}"
            data-modal-toggle="${modalId}"
          >
            <img
              class="mx-auto h-full block"
              src="${imageSrc}"
              alt="${name}"
            />
          </a>
        </div>
        <div class="pt-6">
        <div class="mb-4 flex items-center justify-between gap-4">
          <span class="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300 uppercase"> ${category} </span>
        </div>
        <div class="flex items-center justify-between gap-4">
          <a
            class="text-lg font-semibold leading-tight text-gray-900 hover:underline "
            >${name}</a
          >
          <p
          class="text-2xl font-extrabold leading-tight text-gray-900 "
        >
          ${price}
        </p>
          </div>
    
          <div class="mt-4 flex items-center justify-between gap-4">
         
          <div>
          <select id="size" name="size"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block p-2.5">
          
          ${sizes
            .map((size) => {
              const sizeUpper = size.toUpperCase();

              return /*html*/ `
            <option value="${sizeUpper}">${sizeUpper}</option>
            `;
            })
            .join("")}
          </select>
      </div>
    
            <button
              id="add-to-cart-button-${id}"
              type="submit"
              class="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
            >
              <svg
                class="-ms-2 me-2 h-5 w-5"
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
                  d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                />
              </svg>
              Add to cart
            </button>
          </div>
        </div>
        ${ModalProducInfo({
          id: modalId,
          name,
          price,
          details,
          category,
        })}
      </form>
        `;
    })
    .join("");

  return /*html*/ `
  <section class="bg-gray-50 py-8 antialiased md:py-12">
  <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <div
      class="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4"
    >
     ${productsCards}
    </div>
  </div>
</section>
    `;
};
