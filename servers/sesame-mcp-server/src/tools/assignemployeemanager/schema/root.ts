import { z } from "zod"

export const inputParamsSchema = {
  "employeeId": z.string().uuid().describe("The identifier of the employee"),
  "managerId": z.string().uuid().describe("The identifier of the employee manager"),
  "permission": z.enum(["check","vacation"]).describe("Type of validation manager"),
  "order": z.union([z.literal(0), z.literal(1)]).describe("The validator order")
}