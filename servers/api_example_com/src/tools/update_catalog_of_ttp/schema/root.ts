import { z } from "zod"

export const inputParamsSchema = {
  "catalogId": z.string().describe("The _id of the entity or its 'name' (depends of the entity)"),
  "name": z.string().min(1).max(128).optional(),
  "description": z.string().max(1048576).optional(),
  "variant": z.string().min(1).max(128).optional()
}