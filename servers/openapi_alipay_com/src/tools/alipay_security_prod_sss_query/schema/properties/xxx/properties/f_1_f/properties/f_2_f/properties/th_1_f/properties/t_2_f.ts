import { z } from "zod"

export const inputParams = {
  "o_1_n": z.string().describe("1").optional(),
  "o_2_openid": z.string().describe("o_2_y").optional(),
  "o_2_y": z.string().describe("o_2_y").optional(),
  "o_3_openid": z.string().describe("o_3_y").optional(),
  "o_3_y": z.number().int().describe("o_3_y").optional()
}