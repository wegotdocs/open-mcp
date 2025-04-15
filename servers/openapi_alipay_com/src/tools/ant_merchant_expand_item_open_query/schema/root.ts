import { z } from "zod"

export const inputParams = {
  "target_id": z.string().describe("商品归属主体ID\t例：商品归属主体类型target_type为店铺，则商品归属主体ID为店铺ID（支付宝侧店铺ID）；归属主体类型target_type为小程序，则归属主体ID为小程序ID").optional(),
  "scene": z.string().describe("场景码（具体值请参见产品文档）。").optional(),
  "target_type": z.string().describe("商品归属主体类型。枚举如下：\t5：店铺。\t8：小程序。").optional(),
  "status": z.string().describe("商品状态").optional()
}