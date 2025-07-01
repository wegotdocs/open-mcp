import { z } from "zod"

export const inputParamsSchema = {
  "value": z.number().describe("Percentage of fine on the amount of the charge for payment after the due date").optional(),
  "type": z.enum(["FIXED","PERCENTAGE"]).describe("Fine type").optional()
}