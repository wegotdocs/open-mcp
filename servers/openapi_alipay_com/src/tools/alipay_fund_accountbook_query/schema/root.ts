import { z } from "zod"

export const inputParams = {
  "account_book_id": z.string().describe("记账账簿id").optional(),
  "merchant_user_id": z.string().describe("商户会员的唯一标识，如果传入account_book_id此字段必传并比对一致性。").optional(),
  "scene_code": z.string().describe("资金记账本的开通场景码").optional(),
  "ext_info": z.string().describe("JSON格式，传递业务扩展参数").optional()
}