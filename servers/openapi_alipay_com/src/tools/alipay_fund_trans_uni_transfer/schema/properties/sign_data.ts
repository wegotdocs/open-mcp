import { z } from "zod"

export const inputParams = {
  "ori_app_id": z.string().describe("签名商户开放平台应用APPID").optional(),
  "ori_char_set": z.string().describe("编码类型（大小写敏感）").optional(),
  "ori_out_biz_no": z.string().describe("ori_out_biz_no_001").optional(),
  "ori_sign": z.string().describe("签名密文").optional(),
  "ori_sign_type": z.string().describe("签名算法（大小写敏感）").optional(),
  "partner_id": z.string().describe("商户支付宝账号id").optional()
}