import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("Device identifier"),
  "withInheritance": z.boolean().describe("Retrieve values using definition scope hierarchy").optional()
}