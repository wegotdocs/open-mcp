import { z } from "zod"

export const inputParams = {
  "item_id": z.string().describe("内部商品ID").optional(),
  "out_item_info": z.array(z.object({ "item_app_id": z.string().describe("小程序ID").optional(), "out_item_id": z.string().describe("外部商品ID").optional() })).describe("外部商品信息").optional()
}