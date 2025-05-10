import { z } from "zod"

export const inputParams = {
  "bar_code": z.string().describe("抬头动态码").optional()
}