import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The _id of the entity or its 'name' (depends of the entity)"),
  "order": z.number().int().optional(),
  "description": z.string().max(1048576).optional(),
  "colour": z.string().regex(new RegExp("^#[0-9a-fA-F]{6,6}|$")).optional(),
  "hidden": z.boolean().optional()
}