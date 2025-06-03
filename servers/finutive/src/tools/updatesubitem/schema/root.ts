import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("ID of the subitem to update"),
  "b_id": z.string().optional(),
  "name": z.string().optional(),
  "businessId": z.string().optional(),
  "global": z.boolean().optional()
}