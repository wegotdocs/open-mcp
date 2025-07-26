import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this product_ type_ group."),
  "prefetch": z.array(z.enum(["group","product_type","role"])).describe("List of fields for which to prefetch model instances and add those to the response").optional()
}