import { z } from "zod"

export const inputParamsSchema = {
  "startAt": z.number().int().describe("The index of the first item to return.").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return.").optional()
}