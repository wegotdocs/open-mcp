import { z } from "zod"

export const inputParamsSchema = {
  "field_set_id": z.number().int(),
  "ids_in_order": z.array(z.number().int()).describe("An array of field IDs in the desired order.").optional()
}