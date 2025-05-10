import { z } from "zod"

export const inputParams = {
  "consumption_threshold": z.number().int().describe("消费门槛，单位分").optional(),
  "discount_amount": z.number().int().describe("优惠金额，单位分").optional(),
  "type": z.string().describe("NORMAL 常规类型，不限制, RESTRICTED 限制报名条件").optional()
}