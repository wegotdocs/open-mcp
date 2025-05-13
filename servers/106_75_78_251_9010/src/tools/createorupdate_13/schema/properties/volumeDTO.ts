import { z } from "zod"

export const inputParamsSchema = {
  "volume": z.number().int().gte(0).describe("立方毫米(mm³)"),
  "height": z.number().int().gte(0).describe("毫米(mm)"),
  "width": z.number().int().gte(0).describe("毫米(mm)"),
  "length": z.number().int().gte(0).describe("毫米(mm)")
}