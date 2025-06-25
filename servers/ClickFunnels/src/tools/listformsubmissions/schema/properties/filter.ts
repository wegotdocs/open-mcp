import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("A comma-separated list of form submission IDs to filter by.").optional(),
  "page_id": z.string().describe("A comma-separated list of page IDs to filter by.").optional(),
  "contact_id": z.string().describe("A comma-separated list of contact IDs to filter by.").optional()
}