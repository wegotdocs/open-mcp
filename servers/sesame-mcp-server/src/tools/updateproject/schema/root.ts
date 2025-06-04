import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid().describe("Project ID"),
  "name": z.string().describe("The name of the project"),
  "parentProjectId": z.string().uuid().describe("The id of the parent project").optional(),
  "customerId": z.string().uuid().describe("The id of the customer").optional(),
  "price": z.number().describe("The price of the project").optional(),
  "startDate": z.string().date().describe("The start date of the project").optional(),
  "endDate": z.string().date().describe("The end date of the project").optional(),
  "managerId": z.string().uuid().describe("The id of the employee manager").optional(),
  "description": z.string().describe("The description of the project").optional(),
  "status": z.enum(["active","inactive","paused"]).describe("The status of the project").optional()
}