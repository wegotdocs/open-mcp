import { z } from "zod"

export const inputParamsSchema = {
  "schemeId": z.string().describe("The ID of the issue security scheme."),
  "levelId": z.string().describe("The ID of the issue security level to remove."),
  "replaceWith": z.string().describe("The ID of the issue security level that will replace the currently selected level.").optional()
}