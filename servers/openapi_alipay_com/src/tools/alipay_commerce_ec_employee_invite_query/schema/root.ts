import { z } from "zod"

export const inputParams = {
  "enterprise_id": z.string().describe("企业id").optional(),
  "employee_id": z.string().describe("企业码员工ID，签约适用对象为指定员工时填写").optional(),
  "page_content_code": z.string().describe("用于展示不同的页面文案，使用标准页面文案是无需传值").optional(),
  "withholding_sign_str": z.string().describe("代扣签约串。需要签约代扣协议时，必传，返回的签约链接会拼接上代扣签约串。").optional(),
  "create_share_code": z.string().describe("是否生成签约吱口令，不传默认为N").optional()
}