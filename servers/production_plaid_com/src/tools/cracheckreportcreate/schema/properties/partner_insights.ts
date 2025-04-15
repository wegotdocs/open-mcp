import { z } from "zod"

export const inputParamsSchema = {
  "prism_products": z.array(z.enum(["insights","scores"]).describe("The Prism products that can be returned by the Plaid API")).describe("The specific Prism Data products to return. If none are passed in, then all products will be returned.").optional(),
  "prism_versions": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `prism_versions` to the tool, first call the tool `expandSchema` with \"/properties/partner_insights/properties/prism_versions\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The versions of Prism products to evaluate</property-description>").optional()
}