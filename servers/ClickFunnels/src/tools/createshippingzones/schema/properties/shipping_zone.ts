import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Name"),
  "address_filter_id": z.union([z.string().describe("Zone"), z.null().describe("Zone")]).describe("Zone").optional(),
  "region_ids": z.union([z.array(z.any()).describe("Region IDs"), z.null().describe("Region IDs")]).describe("Region IDs").optional(),
  "country_ids": z.union([z.array(z.any()).describe("Country IDs"), z.null().describe("Country IDs")]).describe("Country IDs").optional(),
  "includes_rest_of_world": z.union([z.boolean().describe("Includes Rest of the World"), z.null().describe("Includes Rest of the World")]).describe("Includes Rest of the World").optional()
}