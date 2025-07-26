import { z } from "zod"

export const inputParamsSchema = {
  "service_key_1": z.string().max(200).nullable().optional(),
  "service_key_2": z.string().max(200).nullable().optional(),
  "service_key_3": z.string().max(200).nullable().optional(),
  "product": z.number().int(),
  "tool_configuration": z.number().int()
}