import { z } from "zod"

export const inputParams = {
  "projectIdOrKey": z.string().describe("The ID or (case-sensitive) key of the project."),
  "x": z.number().int().describe("The X coordinate of the top-left corner of the crop region.").optional(),
  "y": z.number().int().describe("The Y coordinate of the top-left corner of the crop region.").optional(),
  "size": z.number().int().describe("The length of each side of the crop region.").optional()
}