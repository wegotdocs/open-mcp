import { z } from "zod"

export const inputParams = {
  "item_id_list": z.array(z.string()).describe("商品ID列表").optional()
}