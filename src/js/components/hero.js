export const Hero = ({ title }) => {
  return /*html*/ `
  <div
  class="text-center mx-auto px-4 py-8 flex flex-col items-center justify-center gap-6 bg-[url('/public/products/hero.png')] bg-repeat bg-cover bg-center"
>
  <h1 class="text-4xl text-slate-600 font-medium uppercase">
    ${title} fashion trend
  </h1>
  <span class="text-xl text-yellow-600 font-extrabold"
    >Up to 50% off</span
  >
</div>
  `;
};
