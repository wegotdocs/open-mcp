import { z } from "zod"

export const inputParamsSchema = {
  "companyId": z.string().uuid().describe("The id of the company where you will create the customer"),
  "customerName": z.string().describe("The name of the customer"),
  "firstName": z.string().describe("The first name of the contact person").optional(),
  "lastName": z.string().describe("The last name of the contact person").optional(),
  "email": z.string().email().describe("The email of the contact person").optional(),
  "phone": z.string().describe("The phone of the contact person").optional(),
  "description": z.string().describe("A description").optional()
}