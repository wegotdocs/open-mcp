import { z } from "zod"

export const inputParamsSchema = {
  "employeeId": z.string().uuid().describe("The id of the employee").optional(),
  "absencesValidator": z.string().uuid().describe("The id of the manager").optional(),
  "fromDayOff": z.string().date().describe("First day of search period").optional(),
  "toDayOff": z.string().date().describe("Last day of search period").optional(),
  "status": z.enum(["accepted","rejected","pending"]).describe("Request status").optional(),
  "page": z.number().int().describe("Request a specific page").optional(),
  "limit": z.number().int().describe("Limit vacation requests").optional(),
  "orderBy": z.string().describe("field1 asc, field2 desc").optional()
}