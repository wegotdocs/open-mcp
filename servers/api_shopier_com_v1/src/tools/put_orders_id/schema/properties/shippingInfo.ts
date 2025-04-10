import { z } from "zod"

export const inputParams = {
  "firstName": z.string().describe("Buyer's first name for shipping.").optional(),
  "lastName": z.string().describe("Buyer's last name for shipping.").optional(),
  "nationalId": z.string().describe("Buyer's national identification number for shipping.").optional(),
  "email": z.string().describe("Buyer's email address for shipping.").optional(),
  "phone": z.string().describe("Buyer's phone number for shipping.").optional(),
  "company": z.string().describe("Buyer company's name for shipping.").optional(),
  "address": z.string().describe("Buyer's physical address for shipping.").optional(),
  "district": z.string().describe("Buyer's district for shipping.").optional(),
  "city": z.string().describe("Buyer's city for shipping.").optional(),
  "state": z.string().describe("Buyer's state for shipping.").optional(),
  "postcode": z.string().describe("Buyer's postcode for shipping.").optional(),
  "country": z.string().describe("Buyer's country for shipping.").optional()
}