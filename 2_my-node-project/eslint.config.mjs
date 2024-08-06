import globals from "globals";
import pluginJs from "@eslint/js";
import pluginNode from "eslint-plugin-node";


export default [
  {
    languageOptions: { 
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parserOption: {
        ecmaVersion: 2018
      }
    }
  },
  pluginJs.configs.recommended,
  pluginNode.configs.recommended
];