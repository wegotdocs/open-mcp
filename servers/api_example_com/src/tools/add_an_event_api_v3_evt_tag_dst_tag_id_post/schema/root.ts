import { z } from "zod"

export const inputParamsSchema = {
  "dst_tag_id": z.number().int(),
  "session_id": z.string().optional(),
  "name": z.string(),
  "display_name": z.union([z.string(), z.null()]).optional(),
  "description": z.union([z.string(), z.null()]).optional(),
  "condition_list": z.union([z.array(z.object({ "sensor": z.string(), "output": z.string(), "output_type_id": z.number().int().gte(1).lte(3).describe("1: Text, 2: Number, 3: Array"), "op": z.string().describe(">, <, >=, <=, ==, !=, has, not has"), "value": z.string() })), z.null()]).optional()
}