const production = process.env.NODE_ENV === "production";

const cssnano = require("cssnano")({
  preset: "default",
});

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    ...(production ? [cssnano] : []),
  ],
};
