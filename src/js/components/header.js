export const Header = () => /* html*/ `
    <div>
      <div class="p-4 text-slate-600 sm:p-6">
        <div class="mx-auto max-w-screen-xl flex justify-center">
          <a href="/">
            <img class="w-16 h-14" src="./logo.png" alt="logo" />
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
              href="atheisure"
              class="text-slate-600 font-bold text-sm sm:text-lg hover:underline"
              >Atheisure
            </a>
          </div>
        </div>
      </div>
    </div>
`;
