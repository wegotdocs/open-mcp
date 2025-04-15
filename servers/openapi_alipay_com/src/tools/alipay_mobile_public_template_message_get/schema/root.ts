import { z } from "zod"

export const inputParams = {
  "template_id": z.string().describe("消息母板id").optional()
}