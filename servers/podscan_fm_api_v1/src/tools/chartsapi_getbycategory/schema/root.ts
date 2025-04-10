import { z } from "zod"

export const inputParams = {
  "platform": z.string().describe("The platform (apple or spotify)"),
  "countryCode": z.string().describe("The 2-letter country code"),
  "category": z.string().describe("The category identifier")
}