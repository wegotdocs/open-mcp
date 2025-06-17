import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().optional(),
  "name": z.string().max(255).describe("The product name"),
  "description": z.string().max(512).describe("The product description").optional(),
  "taxCategoryId": z.union([z.literal(99999), z.literal(20010), z.literal(40030), z.literal(51020), z.literal(51010), z.literal(31000), z.literal(30070)]).describe("The product's tax category identifier string").optional(),
  "requiresShipping": z.boolean().describe("If the product requires shipping, shipping calculations will be applied").optional(),
  "accountingCode": z.string().describe("The product accounting code").optional(),
  "customFields": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `customFields` to the tool, first call the tool `expandSchema` with \"/properties/customFields\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>\"Custom Fields list as a map `{\"custom field name\": \"custom field value\", ...}\"`.\nThe format must follow the saved format (see Custom Fields section for the formats).\n</property-description>").optional(),
  "createdTime": z.string().optional(),
  "updatedTime": z.string().optional(),
  "_links": z.array(z.string()).min(1).max(1).describe("The links related to resource").readonly().optional()
}