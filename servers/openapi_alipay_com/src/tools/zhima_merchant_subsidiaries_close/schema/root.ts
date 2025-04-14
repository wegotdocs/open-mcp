import { z } from "zod"

export const inputParams = {
  "order_no": z.string().describe("工单标识").optional()
}