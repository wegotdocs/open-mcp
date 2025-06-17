import { z } from "zod"

export const inputParamsSchema = {
  "email": z.string().email().max(100).describe("The user email"),
  "company": z.string().describe("The user's company name"),
  "firstName": z.string().describe("The user first name"),
  "lastName": z.string().describe("The user last name"),
  "businessPhone": z.string().describe("The user business phone number"),
  "password": z.string().describe("The user password"),
  "website": z.string().describe("The user's website address"),
  "currencies": z.array(z.string().describe("3 letters ISO 4217 currency code")).describe("An array of currencies codes").optional(),
  "merchantCategoryCode": z.number().int().describe("Merchant category code. Defaults to \"Computer Software Stores\"").optional()
}