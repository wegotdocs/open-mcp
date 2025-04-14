import { z } from "zod"

export const inputParams = {
  "commodity_order_id": z.string().describe("订购服务订单ID，通过支付宝发送的 <a href=\"https://opendocs.alipay.com/isv/b7f7864a_alipay.open.servicemarket.order.notify?scene=common&pathHash=af6ed436\">服务市场商户确认订购通知</a> 获取。").optional(),
  "start_page": z.string().describe("查询开始页码，1 为第一页。").optional()
}