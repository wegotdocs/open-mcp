import { z } from "zod"

export const inputParams = {
  "boolen": z.boolean().describe("2").optional(),
  "ces": z.array(z.number().int()).describe("21").optional(),
  "des": z.string().describe("12").optional(),
  "str": z.array(z.string()).describe("1").optional()
}