import { z } from "zod"

export const inputParamsSchema = {
  "part": z.array(z.string()).describe("The *part* parameter specifies the videoCategory resource properties that the API response will include. Set the parameter value to snippet."),
  "hl": z.string().optional(),
  "id": z.array(z.string()).describe("Returns the video categories with the given IDs for Stubby or Apiary.").optional(),
  "regionCode": z.string().optional()
}