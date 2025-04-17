import { z } from "zod"

export const inputParams = {
  "numAvailable": z.number().int().describe("Number of discount codes that can be used.").optional(),
  "expiresAt": z.string().describe("Expiry date of the discount code. yyyy-MM-ddZ format is used (e.g., 2022-07-21+0300).").optional()
}