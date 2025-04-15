import { z } from "zod"

export const inputParams = {
  "cent": z.number().int().describe("分").optional(),
  "currency_value": z.string().describe("币种类型值").optional()
}