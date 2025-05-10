import { z } from "zod"

export const inputParams = {
  "out_biz_no": z.string().describe("商户转账唯一订单号：发起转账来源方定义的转账单据ID。\r\t和支付宝转账单据号不能同时为空。当和支付宝转账单据号同时提供时，将用支付宝转账单据号进行查询，忽略本参数。").optional(),
  "order_id": z.string().describe("支付宝转账单据号：和商户转账唯一订单号不能同时为空。当和商户转账唯一订单号同时提供时，将用本参数进行查询，忽略商户转账唯一订单号。").optional()
}