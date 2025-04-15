import { z } from "zod"

export const inputParams = {
  "message_no": z.string().describe("消息ID").optional()
}