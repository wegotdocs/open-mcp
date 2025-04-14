import { z } from "zod"

export const inputParams = {
  "authorization_type": z.string().describe("发票授权类型，可选值：INVOICE_AUTO_SYNC（发票自动回传）\tINVOICE_TWOWAY_AUTO_SYNC（发票双向自动回传）").optional(),
  "extend_fields": z.string().describe("扩展字段，格式为：KEY1=VALUE1,KEY2=VALUE2,KEY3=VALUE3\t邮箱地址KEY为EMAIL_ADDRESS").optional(),
  "m_short_name": z.string().describe("开票商户品牌简称，与商户入驻时的品牌简称保持一致。").optional(),
  "open_id": z.string().describe("支付宝用户userId").optional(),
  "user_id": z.string().describe("支付宝用户userId").optional()
}