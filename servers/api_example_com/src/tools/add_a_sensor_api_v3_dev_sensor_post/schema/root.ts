import { z } from "zod"

export const inputParamsSchema = {
  "session_id": z.string().optional(),
  "display_name": z.string(),
  "org_id": z.union([z.number().int(), z.null()]).describe("Only the super administrator can specify the org_id; otherwise, the org_id will default to the user's org_id.").optional(),
  "output_list": z.array(z.object({ "output_name": z.string(), "output_type_id": z.number().int().describe("1: Text, 2: Number, 3: Array"), "description": z.union([z.string(), z.null()]).optional() }))
}