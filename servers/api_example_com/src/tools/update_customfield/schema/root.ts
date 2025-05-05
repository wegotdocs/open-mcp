import { z } from "zod"

export const inputParamsSchema = {
  "customFieldId": z.string().describe("The _id of the entity or its 'name' (depends of the entity)"),
  "displayName": z.string().min(1).max(64).optional(),
  "group": z.string().min(1).max(64).optional(),
  "description": z.string().max(1048576).optional(),
  "type": z.enum(["string","integer","float","boolean","date","url"]).optional(),
  "options": z.array(z.any()).optional(),
  "mandatory": z.boolean().optional()
}