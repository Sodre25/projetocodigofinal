export const Header = () => /* html*/ `
    <div>
      <div class="p-4 text-slate-600 sm:p-6">
        <div class="mx-auto max-w-screen-xl flex justify-center items-center">
          <a href="/" class="mx-auto">
            <img class="w-16 h-14" src="./logo.png" alt="logo" />
          </a>
          <a  href="/cart" class="relative flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 text-sm font-medium leading-none text-gray-900">
          <span class="sr-only">
            Cart
          </span>
          <svg class="w-6 h-6 lg:me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
          </svg> 
          <span class="hidden sm:flex">My Cart</span>
          <div id="cart-items-counter" class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2"></div>         
        </a>
        </div>
      </div>

      <div class="px-4 py-1.5 bg-slate-600 sm:px-6">
        <div class="mx-auto max-w-screen-xl flex justify-center">
          <span class="text-white font-bold text-sm">
            50% off on your next purchase.
          </span>
        </div>
      </div>

      <div class="px-4 py-2.5 bg-gray-100 sm:px-6">
        <div class="mx-auto max-w-screen-xl flex justify-center">
          <div class="flex gap-6 sm:gap-8">
            <a
              href="/sustainable"
              class="text-slate-600 font-bold text-sm sm:text-lg hover:underline"
              >Sustainable</a
            >
            <a
              href="/plus-size"
              class="text-slate-600 font-bold text-sm sm:text-lg hover:underline"
              >Plus Size</a
            >
            <a
              href="/atheisure"
              class="text-slate-600 font-bold text-sm sm:text-lg hover:underline"
              >Atheisure
            </a>
          </div>
        </div>
      </div>
    </div>
`;
