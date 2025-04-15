import { z } from "zod"

export const inputParams = {
  "logistics_type": z.string().describe("物流类型").optional()
}