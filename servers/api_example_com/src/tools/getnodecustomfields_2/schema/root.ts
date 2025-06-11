import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int(),
  "locationId": z.number().int(),
  "withInheritance": z.boolean().describe("Retrieve values using definition scope hierarchy").optional()
}