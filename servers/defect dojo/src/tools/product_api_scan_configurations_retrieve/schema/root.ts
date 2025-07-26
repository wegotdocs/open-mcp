import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this product_ap i_ scan_ configuration."),
  "prefetch": z.array(z.enum(["product","tool_configuration"])).describe("List of fields for which to prefetch model instances and add those to the response").optional()
}