import { z } from "zod"

export const inputParamsSchema = {
  "holderName": z.string().describe("Name printed on card"),
  "number": z.string().describe("Card number"),
  "expiryMonth": z.string().describe("Expiration month with 2 digits"),
  "expiryYear": z.string().describe("Expiration year with 4 digits"),
  "ccv": z.string().describe("Security code")
}