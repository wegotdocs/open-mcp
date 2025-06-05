import { z } from "zod"

export const inputParamsSchema = {
  "domain": z.string().describe("Domain name"),
  "sort": z.enum(["traff","region","country_name_en","google_domain"]).describe("Sort by data\n\nDefault: `[\"traff\"]`").optional(),
  "order": z.enum(["asc","desc"]).describe("Sort order\n\nDefault: `\"desc\"`").optional()
}