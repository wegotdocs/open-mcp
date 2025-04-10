import { z } from "zod"

export const inputParams = {
  "title": z.string().describe("The title of the product selection, a subset of product variation.").optional()
}