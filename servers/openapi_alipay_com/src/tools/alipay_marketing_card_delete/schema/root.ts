import { z } from "zod"

export const inputParams = {
  "out_serial_no": z.string().describe("商户端删卡业务流水号，商户自定义且需确保流水号唯一性。").optional(),
  "target_card_no": z.string().describe("支付宝业务卡号。即开卡接口返回结果中的card_info.biz_card_no。").optional(),
  "target_card_no_type": z.string().describe("卡号ID类型").optional(),
  "reason_code": z.string().describe("删卡原因\t\tUSER_UNBUND：用户解绑（可以重新绑定）\t\tCANCEL：销户（完成销户后，就不能再重新绑定）\t\tPRESENT：转赠（可以重新绑定）").optional(),
  "ext_info": z.string().describe("删卡扩展参数，json格式。\t\t用于商户的特定业务信息的传递，只有商户与支付宝约定了传递此参数且约定了参数含义，此参数才有效。\t\t目前支持如下key：\t\tnew_card_no：新卡号\t\tdonee_user_id：受赠人userId").optional()
}