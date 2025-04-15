import { z } from "zod"

export const inputParams = {
  "ext_info": z.string().describe("JSON格式，传递业务扩展参数").optional(),
  "merchant_user_id": z.string().describe("外部商户系统会员的唯一标识，自定义传入").optional(),
  "merchant_user_type": z.string().describe("外部商户用户类型:BUSINESS_EMPLOYEE").optional(),
  "scene_code": z.string().describe("资金记账本的业务场景").optional()
}