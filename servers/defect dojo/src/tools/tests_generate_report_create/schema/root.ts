import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this test."),
  "include_finding_notes": z.boolean().optional(),
  "include_finding_images": z.boolean().optional(),
  "include_executive_summary": z.boolean().optional(),
  "include_table_of_contents": z.boolean().optional()
}