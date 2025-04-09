import { z } from "zod"

export const inputParams = {
  "userProfileMetadata": z.boolean().describe("Indicates if the user profile metadata should be added to the response").optional()
}