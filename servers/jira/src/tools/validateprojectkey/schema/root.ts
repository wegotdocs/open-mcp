import { z } from "zod"

export const inputParams = {
  "key": z.string().describe("The project key.").optional()
}