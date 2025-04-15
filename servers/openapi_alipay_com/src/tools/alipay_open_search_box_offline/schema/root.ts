import { z } from "zod"

export const inputParams = {
  "box_id": z.string().describe("搜索直达配置id").optional(),
  "merchant_id": z.string().describe("商户id，代运营模式下传入。代运营模式，需要服务商已获得商家\"运营支付宝小程序\"授权。").optional()
}