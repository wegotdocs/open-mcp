import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("A comma-separated list of note IDs to filter by (within the scope of the opportunity).").optional(),
  "created_by_id": z.string().describe("A comma-separated list of memberships IDs to filter by.").optional()
}