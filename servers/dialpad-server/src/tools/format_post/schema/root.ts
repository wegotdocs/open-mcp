import { z } from "zod"

export const inputParamsSchema = {
  "country_code": z.string().describe("Country code in ISO 3166-1 alpha-2 format such as \"US\". Required when sending local formatted phone number").optional(),
  "number": z.string().describe("Phone number in local or E.164 format").optional()
}