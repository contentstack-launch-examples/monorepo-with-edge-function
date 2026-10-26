import next from "eslint-config-next";
import turbo from "eslint-config-turbo/flat";
import prettier from "eslint-config-prettier/flat";

export default [
  ...next,
  ...turbo,
  prettier,
  {
    rules: {
      "@next/next/no-html-link-for-pages": "off",
      // eslint-config-next 16 turns this off; keep it on as eslint-config-next 12 had it.
      "react/jsx-no-target-blank": "error",
    },
  },
];
