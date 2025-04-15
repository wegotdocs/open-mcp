import { z } from "zod"

export const inputParamsSchema = {
  "after": z.string().describe("The ID of the priority. Required if `position` isn't provided.").optional(),
  "ids": z.array(z.string()).describe("The list of issue IDs to be reordered. Cannot contain duplicates nor after ID."),
  "position": z.string().describe("The position for issue priorities to be moved to. Required if `after` isn't provided.").optional()
}