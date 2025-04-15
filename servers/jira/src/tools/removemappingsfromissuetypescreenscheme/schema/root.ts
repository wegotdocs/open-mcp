import { z } from "zod"

export const inputParamsSchema = {
  "issueTypeScreenSchemeId": z.string().describe("The ID of the issue type screen scheme."),
  "issueTypeIds": z.array(z.string()).describe("The list of issue type IDs.")
}