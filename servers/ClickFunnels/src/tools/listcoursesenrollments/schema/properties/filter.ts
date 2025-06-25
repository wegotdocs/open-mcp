import { z } from "zod"

export const inputParamsSchema = {
  "contact_id": z.string().describe("A comma-separated list of contact IDs to filter by.").optional(),
  "id": z.string().describe("A comma-separated list of enrollment IDs to filter by.").optional()
}