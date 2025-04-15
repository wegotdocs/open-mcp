import { z } from "zod"

export const inputParams = {
  "face_reserve_strategy": z.string().describe("不传默认为reserve").optional(),
  "return_url": z.string().describe("认证成功后需要跳转的地址，一般为商户业务页面；若无跳转地址可填空字符\"\"。").optional()
}