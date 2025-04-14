import { z } from "zod"

export const inputParams = {
  "merchant_id": z.string().describe("商户id，代运营模式下传入。代运营模式，需要服务商已获得商家\"运营支付宝小程序\"授权。").optional(),
  "page_number": z.number().int().describe("分页查询的当前页号,从1开始").optional(),
  "page_size": z.number().int().describe("每页查询的数量，默认10，不得超过50").optional()
}