import { CURRENCY } from "./constants";

export const formatPrice = (price) => {
  return price.toLocaleString("pt-PT", {
    style: "currency",
    currency: CURRENCY,
  });
};
