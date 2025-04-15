import { z } from "zod"

export const inputParamsSchema = {
  "knowledge_base_uuid": z.string().describe("Knowledge base id"),
  "page": z.number().int().describe("Page number.").optional(),
  "per_page": z.number().int().describe("Items per page.").optional()
}