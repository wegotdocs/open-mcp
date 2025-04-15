import { z } from "zod"

export const inputParams = {
  "template_id": z.string().describe("指定商家消息区域").optional()
}