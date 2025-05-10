import { z } from "zod"

export const inputParams = {
  "auth_token": z.string().describe("用户授权令牌").optional(),
  "business_param": z.string().describe("业务参数大字段，优惠咨询的控制参数，json格式；目前支持传入useBigAmountSkipOrderThold为N来控制不使用大金额跳过优惠的订单门槛检查；默认不传；").optional(),
  "item_consult_list": z.array(z.object({ "item_id": z.string().describe("商品id").optional(), "price": z.string().describe("商品单价，单位为元，最多2位小数").optional(), "quantity": z.string().describe("商品数量").optional() })).describe("商品咨询请求列表（当需要咨询单品券时必传，如果某商品不希望参与本次单品优惠咨询则不传递对应信息即可）").optional(),
  "order_amount": z.string().describe("订单金额（如同时享受商户自有优惠请先扣除后传入），单位为元，最多2位小数").optional(),
  "scene_code": z.array(z.string()).describe("场景码：默认(DEFAULT)").optional(),
  "specified_app_id": z.string().describe("券指定的核销appid（如果配券时指定了核销范围为线上小程序及相应的appid则此处必传）").optional()
}