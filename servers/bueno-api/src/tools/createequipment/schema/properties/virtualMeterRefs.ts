import { z } from "zod"

export const inputParamsSchema = {
  "add": z.array(z.string().uuid()).describe("Submeters that will be added to the virtual meter").optional(),
  "subtract": z.array(z.string().uuid()).describe("Submeters that will be subtracted from the virtual meter").optional(),
  "multiply": z.array(z.string().uuid()).describe("Submeters that the virtual meter will be multiplied by").optional(),
  "divide": z.array(z.string().uuid()).describe("Submeters that the virtual meter will be divided by").optional()
}