import { z } from "zod"

export const inputParams = {
  "amount": z.string().describe("订单金额").optional(),
  "link_url": z.string().describe("订单链接").optional(),
  "logistic_count": z.number().int().describe("订单物流数量").optional(),
  "logistics": z.array(z.object({ "channel": z.string().describe("物流公司名称").optional(), "detail": z.string().describe("物流详情").optional(), "logistic_id": z.string().describe("物流id").optional(), "ship_area": z.string().describe("发货地").optional(), "ship_period": z.string().describe("发货时效").optional(), "status": z.string().describe("物流状态").optional(), "stop_update_time": z.string().describe("物流停更时间").optional() })).describe("物流信息列表").optional(),
  "order_create_time": z.string().describe("订单创建时间").optional(),
  "order_id": z.string().describe("订单id").optional(),
  "order_type": z.string().describe("普通订单：NORMAL\t预售订单：PRE_SALE").optional(),
  "spu_count": z.number().int().describe("订单商品种类").optional(),
  "spus": z.array(z.object({ "brand": z.string().describe("品牌名称").optional(), "category": z.string().describe("类目").optional(), "count": z.number().int().describe("商品数量").optional(), "icon": z.string().describe("图片链接").optional(), "price": z.string().describe("商品单价(单位:元)").optional(), "provider": z.string().describe("商品提供方，店铺或品牌方").optional(), "spu_id": z.string().describe("商品ID").optional() })).describe("订单商品信息").optional(),
  "status": z.string().describe("订单状态，目前支持以下几种状态\t下单未支付\tWAIT_PAY\t支付未发货\tPAIED\t已发货\tIN_DELIVERY\t售后中\tIN_AFTER_SALE\t订单完成\tFINISHED").optional(),
  "sub_status": z.string().describe("订单子状态").optional(),
  "user_id": z.string().describe("下单用户id(外部系统ID)").optional()
}