import { z } from "zod"

export const inputParamsSchema = {
  "tagId": z.string().describe("The _id of the entity or its 'name' (depends of the entity)"),
  "predicate": z.string().min(1).max(128).optional(),
  "description": z.string().max(1048576).optional(),
  "colour": z.string().regex(new RegExp("^#[0-9a-fA-F]{6,6}|$")).optional()
}