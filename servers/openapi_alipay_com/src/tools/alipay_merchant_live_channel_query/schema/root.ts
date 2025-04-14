import { z } from "zod"

export const inputParams = {
  "secret": z.string().describe("渠道下单参数(orderStartId)").optional()
}