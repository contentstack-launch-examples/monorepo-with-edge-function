// This tells ESLint to load the config from the package `eslint-config-custom`
import custom from "eslint-config-custom";

export default [
  ...custom,
  {
    settings: {
      next: {
        rootDir: ["apps/*/"],
      },
    },
  },
];
