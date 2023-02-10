import { defineEventHandler } from "h3";
import { registerTideContentType } from "@dpc-sdp/ripple-tide-api";
import tideJobModule from "../../mapping/job";

export default defineEventHandler(async (event) => {
  registerTideContentType(event, "job", tideJobModule);
});
