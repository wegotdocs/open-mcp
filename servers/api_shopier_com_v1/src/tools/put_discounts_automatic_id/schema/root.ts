import { z } from "zod"

export const inputParams = {
  "startsAt": z.string().describe("Start date of the automatic discount. yyyy-MM-ddZ format is used (e.g., 2022-07-21+0300).").optional(),
  "expiresAt": z.string().describe("Expiry date of the automatic discount. yyyy-MM-ddZ format is used (e.g., 2022-07-21+0300).").optional()
}