import { z } from "zod"

export const inputParamsSchema = {
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "name": z.string().describe("The domain name to purchase."),
  "expectedPrice": z.number().describe("The price you expect to be charged for the purchase.").optional(),
  "renew": z.boolean().describe("Indicates whether the domain should be automatically renewed.").optional(),
  "country": z.string().describe("The country of the domain registrant"),
  "orgName": z.string().describe("The company name of the domain registrant").optional(),
  "firstName": z.string().describe("The first name of the domain registrant"),
  "lastName": z.string().describe("The last name of the domain registrant"),
  "address1": z.string().describe("The street address of the domain registrant"),
  "city": z.string().describe("The city of the domain registrant"),
  "state": z.string().describe("The state of the domain registrant"),
  "postalCode": z.string().describe("The postal code of the domain registrant"),
  "phone": z.string().describe("The phone number of the domain registrant"),
  "email": z.string().describe("The email of the domain registrant")
}