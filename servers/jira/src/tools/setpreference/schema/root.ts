import { z } from "zod"

export const inputParams = {
  "key": z.string().describe("The key of the preference. The maximum length is 255 characters.")
}