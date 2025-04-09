import { z } from "zod"

export const inputParams = {
  "aliasId": z.string().describe("The ID or alias that will be removed"),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}