import { z } from "zod"

export const inputParamsSchema = {
  "session_id": z.string().optional(),
  "name": z.string(),
  "display_name": z.union([z.string(), z.null()]).optional(),
  "description": z.union([z.string(), z.null()]).optional(),
  "org_id": z.number().int().describe("Only the super administrator can specify the org_id; otherwise, the org_id will default to the user's org_id.")
}