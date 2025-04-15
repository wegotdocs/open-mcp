import { z } from "zod"

export const inputParams = {
  "discount_period": z.string().describe("在周期扣场景化模板中配置优惠类型为优惠期玩法时需要该参数，表示后续有多少期扣款可享受优惠，值为自然数代表周期").optional(),
  "low_price_period": z.string().describe("在周期扣场景化模板中配置优惠类型为低价玩法时需要该参数，表示代扣低价期持续的时间。单位是天，该值为自然数").optional()
}