import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("Unique identifier for the resource."),
  "country": z.string().describe("Country ISO 3166 code.").optional(),
  "state": z.string().describe("State code.").optional(),
  "postcode": z.string().describe("Postcode/ZIP, it doesn't support multiple values. Deprecated as of WooCommerce 5.3, 'postcodes' should be used instead.").optional(),
  "city": z.string().describe("City name, it doesn't support multiple values. Deprecated as of WooCommerce 5.3, 'cities' should be used instead.").optional(),
  "rate": z.string().describe("Tax rate.").optional(),
  "name": z.string().describe("Tax rate name.").optional(),
  "priority": z.number().int().describe("Tax priority.").optional(),
  "compound": z.boolean().describe("Whether or not this is a compound rate.").optional(),
  "shipping": z.boolean().describe("Whether or not this tax rate also gets applied to shipping.").optional(),
  "order": z.number().int().describe("Indicates the order that will appear in queries.").optional(),
  "class": z.enum(["standard","reduced-rate","zero-rate"]).describe("Tax class.").optional(),
  "postcodes": z.array(z.string()).describe("List of postcodes / ZIPs. Introduced in WooCommerce 5.3.").optional(),
  "cities": z.array(z.string()).describe("List of city names. Introduced in WooCommerce 5.3.").optional()
}