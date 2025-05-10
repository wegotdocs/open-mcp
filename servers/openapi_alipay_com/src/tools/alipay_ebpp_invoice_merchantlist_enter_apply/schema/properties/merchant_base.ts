import { z } from "zod"

export const inputParams = {
  "login_id": z.string().describe("登陆账号").optional(),
  "logo_info": z.string().describe("商户logo文件流信息，该字段为文件流经base64编码后得到的字符串。").optional(),
  "m_name": z.string().describe("商户品牌全称。").optional(),
  "m_short_name": z.string().describe("商户品牌简称").optional()
}