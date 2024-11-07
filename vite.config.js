const isProd = process.env.NODE_ENV === "production";

export default {
  root: "src",
  base: isProd ? "/cesae-projeto-final/" : "/",
};
