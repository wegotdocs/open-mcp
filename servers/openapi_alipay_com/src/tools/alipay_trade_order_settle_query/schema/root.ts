import { z } from "zod"

export const inputParams = {
  "settle_no": z.string().describe("支付宝分账请求单号，传入该字段，无需再传外部请求号和支付宝交易号").optional(),
  "out_request_no": z.string().describe("调用分账接口时指定的外部请求号。分账查询时需要和支付宝交易号一起传入").optional(),
  "trade_no": z.string().describe("支付宝交易号，传入该字段，需要和外部请求号一起传入").optional()
}