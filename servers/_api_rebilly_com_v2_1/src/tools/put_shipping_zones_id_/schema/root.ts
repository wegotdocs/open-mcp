import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().optional(),
  "name": z.string().max(255).describe("The shipping zone name"),
  "countries": z.array(z.string().regex(new RegExp("^[A-Z]{2}$")).describe("Country ISO Alpha-2 code")).describe("Countries covered by the shipping zone. A country can only belong to one shipping zone (no overlapping).\nThis property can be empty or null to create a default shipping zone for countries that were not specified in other zones.\n").optional(),
  "rates": z.array(z.string()).describe("Price-based shipping rate instructions").optional(),
  "isDefault": z.any().describe("Is this Shipping Zone default").readonly().optional(),
  "createdTime": z.string().optional(),
  "updatedTime": z.string().optional(),
  "_links": z.array(z.string()).min(1).max(1).describe("The links related to resource").readonly().optional()
}