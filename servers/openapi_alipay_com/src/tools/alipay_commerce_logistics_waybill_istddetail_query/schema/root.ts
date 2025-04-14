import { z } from "zod"

export const inputParams = {
  "shop_no": z.string().describe("商家门店编号").optional(),
  "out_order_no": z.string().describe("商家订单号").optional(),
  "order_no": z.string().describe("支付宝订单流水号").optional(),
  "logistics_code": z.string().describe("即时配送公司编码").optional(),
  "waybill_no": z.string().describe("即时配送运单编号").optional()
}