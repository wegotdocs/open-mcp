import { z } from "zod"

export const inputParamsSchema = {
  "street": z.string().describe("Street address").optional(),
  "city": z.string().describe("City").optional(),
  "state": z.string().describe("State or province").optional(),
  "postalCode": z.string().describe("Postal or ZIP code").optional()
}