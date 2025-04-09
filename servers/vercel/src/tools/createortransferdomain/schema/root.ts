import { z } from "zod"

export const inputParams = {
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "method": z.string().describe("The domain operation to perform. It can be either `add` or `transfer-in`.").optional()
}