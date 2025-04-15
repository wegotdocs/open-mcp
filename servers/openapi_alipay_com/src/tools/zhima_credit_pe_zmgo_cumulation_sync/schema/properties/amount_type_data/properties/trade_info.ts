import { z } from "zod"

export const inputParams = {
  "amount": z.string().describe("用户和商户发生交易的交易单金额，单位元").optional(),
  "trade_no": z.string().describe("用户和商户发生交易的交易单号，仅在商户需要回传交易信息时传入。").optional()
}