import { z } from "zod"

export const inputParams = {
  "product_code": z.string().describe("销售产品码").optional(),
  "biz_scene": z.string().describe("业务场景").optional(),
  "member_id": z.string().describe("成员ID，消费发起人").optional(),
  "member_open_id": z.string().describe("消费发起人的openId").optional(),
  "account_id": z.string().describe("企业账户ID").optional(),
  "agreement_no": z.string().describe("三方授权协议号").optional(),
  "trade_no": z.string().describe("支付宝交易订单号").optional(),
  "platform_order_id": z.string().describe("外部平台订单号。使用该参数查询时，返回结果见trade_info_list").optional()
}