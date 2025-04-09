import { z } from "zod"

export const inputParams = {
  "after": z.string().describe("The ID of the resolution. Required if `position` isn't provided.").optional(),
  "ids": z.array(z.string()).describe("The list of resolution IDs to be reordered. Cannot contain duplicates nor after ID."),
  "position": z.string().describe("The position for issue resolutions to be moved to. Required if `after` isn't provided.").optional()
}