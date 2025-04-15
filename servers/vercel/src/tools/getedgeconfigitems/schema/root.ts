import { z } from "zod"

export const inputParamsSchema = {
  "edgeConfigId": z.string().regex(new RegExp("^ecfg_")),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}