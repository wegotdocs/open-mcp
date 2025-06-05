import { z } from "zod"

export const inputParamsSchema = {
  "domain": z.string().describe("Domain name"),
  "sort": z.enum(["keywords_count","db_name","country_name_en","google_domain"]).describe("Field for sorting").optional(),
  "order": z.enum(["asc","desc"]).describe("Sort order (asc — ascending, desc — descending)").optional()
}