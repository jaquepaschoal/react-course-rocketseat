import { injectGlobal } from "styled-components";

import "font-awesome/css/font-awesome.css";

injectGlobal`
  * {

  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smothing: antialiased !important;
    font-family: sans-serif;
  }
`;
