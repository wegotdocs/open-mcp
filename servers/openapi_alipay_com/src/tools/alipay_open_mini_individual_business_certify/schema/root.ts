import { z } from "zod"

export const inputParams = {
  "license_no": z.string().describe("营业执照注册号即营业执照的编号。").optional(),
  "license_pic": z.string().describe("营业执照图片的Base64编码字符串，图片大小不能超过2M").optional()
}