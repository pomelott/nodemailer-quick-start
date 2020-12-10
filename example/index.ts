import quickStart from "../index";

import * as customMainParam from "./custom/index";

switch (process.argv[2]) {
  case "custom":
    quickStart(customMainParam);
    break;
  default:
    quickStart();
}
