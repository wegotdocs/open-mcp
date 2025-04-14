export { inputParams } from "./schema/root.js"

export const toolName = `alipay_commerce_ec_employee_invite_query`
export const toolDescription = `获取员工签约激活链接`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/commerce/ec/employee/invite`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "enterprise_id",
    "employee_id",
    "page_content_code",
    "withholding_sign_str",
    "create_share_code"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}