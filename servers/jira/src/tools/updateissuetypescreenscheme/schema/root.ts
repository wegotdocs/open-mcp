import { z } from "zod"

export const inputParamsSchema = {
  "issueTypeScreenSchemeId": z.string().describe("The ID of the issue type screen scheme."),
  "description": z.string().describe("The description of the issue type screen scheme. The maximum length is 255 characters.").optional(),
  "name": z.string().describe("The name of the issue type screen scheme. The name must be unique. The maximum length is 255 characters.").optional()
}