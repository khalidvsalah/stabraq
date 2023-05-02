module.exports = {
  src: "src/",
  dest: "dist/",
  js: {
    entry: ["index.js"],
    watch: [
      "src/index.js",
      "src/**/**/*",
      "src/**/**/**/*",
      "src/**/**/**/**/*",
    ],
    dest: "main.js",
  },
  mode: "PROD",
};
