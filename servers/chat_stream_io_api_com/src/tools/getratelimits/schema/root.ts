import { z } from "zod"

export const inputParamsSchema = {
  "server_side": z.boolean().describe("Whether to include server-side platform limits or not").optional(),
  "android": z.boolean().describe("Whether to include Android platform limits or not").optional(),
  "ios": z.boolean().describe("Whether to include iOS platform limits or not").optional(),
  "web": z.boolean().describe("Whether to include web platform limits or not").optional(),
  "endpoints": z.string().describe("Specific endpoints to show limits for, as a comma-separated list of values").optional()
}