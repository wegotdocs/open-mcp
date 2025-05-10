import { z } from "zod"

export const inputParams = {
  "a_open_id": z.string().describe("1").optional(),
  "a_uid": z.string().describe("1").optional(),
  "date_a": z.array(z.string()).describe("test").optional(),
  "price_a": z.array(z.string()).describe("test").optional(),
  "string_a": z.array(z.string()).describe("test").optional(),
  "string_yingshe": z.string().describe("ttes").optional(),
  "string_yingshe_1_open_id": z.string().describe("test").optional(),
  "string_yingshe_2_openid": z.string().describe("test").optional()
}