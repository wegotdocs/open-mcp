import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("The name of the training").optional(),
  "startDate": z.string().date().describe("Y-m-d").optional(),
  "endDate": z.string().date().describe("Y-m-d").optional(),
  "orderType": z.enum(["asc","desc"]).describe("Order ascendant or descendent").optional(),
  "orderKey": z.enum(["name","amount"]).describe("Order by the specific field specific users").optional(),
  "limit": z.number().int().describe("Limit work entries").optional(),
  "page": z.number().int().describe("Request a specific page").optional()
}