import { z } from "zod"

export const inputParams = {
  "issueTypeScreenSchemeId": z.string().describe("The ID of the issue type screen scheme.").optional(),
  "projectId": z.string().describe("The ID of the project.").optional()
}