import { z } from "zod"

export const inputParams = {
  "commodity_order_id": z.string().describe("订购服务插件订单号").optional(),
  "mini_app_id": z.string().describe("商家订购服务选择的某一小程序的APPID，如果该订单为蚂蚁服务市场发布的小程序插件服务所产生的订单，则此字段必填").optional(),
  "shop_id": z.string().describe("商家订购服务选择的某一门店的ID。若该订单：\t为支付宝服务市场发布的服务所产生订单则该参数可选。").optional()
}