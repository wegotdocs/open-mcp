import { z } from "zod"

export const inputParamsSchema = {
  "pageSize": z.number().int().describe("Limit number of records per page").optional(),
  "anchorNaturalId": z.number().int().describe("Last User Identifier from previous page").optional(),
  "searchCriteria": z.string().describe("Search by first name, last name or email address").optional(),
  "userType": z.enum(["TECHNICIAN","END_USER","CONTACT"]).describe("User Type").optional(),
  "clientId": z.number().int().describe("Organization identifier").optional()
}