const arrivals = [
  {
    name: "Comfort",
    image: "./comfort.png",
    href: "/comfort",
  },
  {
    name: "Sustainable",
    image: "./sustainable.png",
    href: "/sustainable",
  },
  {
    name: "Plus Size",
    image: "./plus-size.png",
    href: "/plus-size",
  },
  {
    name: "Atheisure",
    image: "./atheisure.png",
    href: "/atheisure",
  },
];

const NewArrivalsSection = () => {
  const newArrivalsCards = arrivals
    .map(
      ({ name, image, href }) => /*html*/ `
    <div class="relative">
      <img class="w-80 h-80" src="${image}" alt="${name}" />
      <a href="${href}" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-1.5 px-3.5 bg-slate-600 rounded hover:bg-slate-500">
        <span class="text-white font-medium text-sm text-nowrap">${name}</span>
      </a>
    </div>
  `
    )
    .join("");

  return /*html*/ `
    <div
        class="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto justify-center"
    >
        ${newArrivalsCards}
    </div>
  `;
};

export const NewArrivals = () => /*html*/ `
<div class="p-6 sm:p-8">
    <div class="mx-auto max-w-screen-xl flex flex-col justify-center">
        <div class="flex flex-col gap-3 items-center pb-10">
            <span class="text-slate-600 font-semibold text-xl"
            >We made your everyday fashion to the next level</span
            >
            <span class="text-slate-600 font-bold text-2xl"
            >NEW ARRIVALS FLASH SALES</span
            >
            <span class="text-yellow-600 font-bold text-xl"
            >Up to 50% off</span
            >
        </div>
        ${NewArrivalsSection()}
    </div>
</div>
`;
