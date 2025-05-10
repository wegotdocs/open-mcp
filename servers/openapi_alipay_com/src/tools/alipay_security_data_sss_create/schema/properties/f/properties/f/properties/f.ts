import { z } from "zod"

export const inputParams = {
  "c_1": z.string().describe("我晚点").optional(),
  "q": z.string().describe("1").optional(),
  "q_1_open_id": z.string().describe("1").optional()
}