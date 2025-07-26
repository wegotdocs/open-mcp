import { z } from "zod"

export const inputParamsSchema = {
  "include_finding_notes": z.boolean().optional(),
  "include_finding_images": z.boolean().optional(),
  "include_executive_summary": z.boolean().optional(),
  "include_table_of_contents": z.boolean().optional()
}