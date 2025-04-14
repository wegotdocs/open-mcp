import { z } from "zod"

export const inputParams = {
  "notify_url": z.string().describe("通知地址").optional()
}