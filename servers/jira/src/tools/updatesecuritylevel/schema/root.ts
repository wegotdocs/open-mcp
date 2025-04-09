import { z } from "zod"

export const inputParams = {
  "schemeId": z.string().describe("The ID of the issue security scheme level belongs to."),
  "levelId": z.string().describe("The ID of the issue security level to update."),
  "description": z.string().max(255).describe("The description of the issue security scheme level.").optional(),
  "name": z.string().max(60).describe("The name of the issue security scheme level. Must be unique.").optional()
}