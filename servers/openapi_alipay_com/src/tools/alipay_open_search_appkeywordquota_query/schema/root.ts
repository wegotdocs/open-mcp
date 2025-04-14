import { z } from "zod"

export const inputParams = {
  "target_appid": z.string().describe("小程序id").optional()
}