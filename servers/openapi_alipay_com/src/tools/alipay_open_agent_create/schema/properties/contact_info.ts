import { z } from "zod"

export const inputParams = {
  "contact_email": z.string().describe("联系人邮箱").optional(),
  "contact_mobile": z.string().describe("联系人手机号码").optional(),
  "contact_name": z.string().describe("联系人名称").optional()
}