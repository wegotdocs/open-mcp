import { z } from "zod"

export const inputParams = {
  "promise": z.string().describe("是否承诺收单账号信息准确。具体承诺信息可查看 <a href=\"https://gw.alipayobjects.com/os/bmw-prod/922bafa8-a712-4f79-aa32-6f08d7359a5c.docx\">门店信息承诺函</a>。\tY 是\tN 否").optional(),
  "receipt_account_id": z.string().describe("收单账号").optional(),
  "shop_id": z.string().describe("店铺ID").optional()
}