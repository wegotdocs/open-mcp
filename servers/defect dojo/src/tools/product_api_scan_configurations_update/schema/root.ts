import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this product_ap i_ scan_ configuration."),
  "service_key_1": z.string().max(200).nullable().optional(),
  "service_key_2": z.string().max(200).nullable().optional(),
  "service_key_3": z.string().max(200).nullable().optional(),
  "product": z.number().int(),
  "tool_configuration": z.number().int()
}