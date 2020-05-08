module.exports = {
  presets: ["next/babel"],
  plugins: [
    "emotion",
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          "@": "./src",
        },
      },
    ],
  ],
};
