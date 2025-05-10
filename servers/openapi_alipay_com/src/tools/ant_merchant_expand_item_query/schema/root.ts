import { z } from "zod"

export const inputParams = {
  "target_type": z.string().describe("商品归属主体类型:\r\t5: 店铺\r\t4: 主站MID\r\t3: 参与者\r\t2: 角色\r\t1: 联系人").optional(),
  "target_id": z.string().describe("商品归属主体id").optional(),
  "undefined_category": z.boolean().describe("未分类类目: true 的时候 front_category_id 必须不填（null）").optional(),
  "front_category_id": z.string().describe("商品前台类目id: null 表示所有分类").optional(),
  "status": z.string().describe("商品状态：EFFECT、INVALID、PAUSE；不填返回所有状态商品").optional()
}