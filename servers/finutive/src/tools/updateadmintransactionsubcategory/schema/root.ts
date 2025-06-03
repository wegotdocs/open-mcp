import { z } from "zod"

export const inputParamsSchema = {
  "subcategory_id": z.string().describe("ID of the subcategory to update"),
  "name": z.string().optional(),
  "icon": z.string().optional(),
  "color": z.string().optional(),
  "keywords": z.string().optional(),
  "priority": z.number().int().optional(),
  "afterbanks_equivalent": z.string().optional(),
  "applicable_to": z.string().optional(),
  "suggestion_to_conciliate": z.string().optional()
}