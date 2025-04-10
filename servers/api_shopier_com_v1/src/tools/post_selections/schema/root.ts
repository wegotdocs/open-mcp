import { z } from "zod"

export const inputParams = {
  "variationId": z.string().describe("The ID of the product variation."),
  "title": z.string().describe("The title of the product selection, a subset of product variation.")
}