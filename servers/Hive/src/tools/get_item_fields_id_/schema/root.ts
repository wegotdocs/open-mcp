import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("(Required) A unique integer value identifying this item fields."),
  "Accept": z.string().optional(),
  "Authorization": z.string().optional()
}