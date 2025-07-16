import { z } from "zod"

export const inputParamsSchema = {
  "value": z.number().describe("设置值（如温度）").optional(),
  "unit": z.string().describe("数值单位").optional()
}