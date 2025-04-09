import { z } from "zod"

export const inputParams = {
  "expand": z.string().describe("Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `renderedBody` Returns the comment body rendered in HTML.\n *  `properties` Returns the comment's properties.").optional(),
  "ids": z.array(z.number().int()).describe("The list of comment IDs. A maximum of 1000 IDs can be specified.")
}