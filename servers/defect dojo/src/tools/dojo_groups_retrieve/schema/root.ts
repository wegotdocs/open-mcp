import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this dojo_ group."),
  "prefetch": z.array(z.enum(["product_groups","product_type_groups","users"])).describe("List of fields for which to prefetch model instances and add those to the response").optional()
}