import { z } from "zod"

export const inputParamsSchema = {
  "employee_id": z.number().int().describe("Numeric `id` of the employee"),
  "width": z.number().int().describe("Width of the image. Default 75x75")
}