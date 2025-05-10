export { inputParams } from "./schema/root.js"

export const toolName = `alipay_commerce_ec_employee_add`
export const toolDescription = `添加员工`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/commerce/ec/employee/add`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "create_share_code",
    "department_ids",
    "employee_cert_no",
    "employee_cert_type",
    "employee_email",
    "employee_mobile",
    "employee_name",
    "employee_no",
    "encrypt_cert_no",
    "encrypt_mobile",
    "enterprise_id",
    "free_sign_token",
    "identity",
    "identity_open_id",
    "identity_type",
    "iot_check_type",
    "profiles",
    "sign_return_url",
    "sign_url_carry_info",
    "withholding_sign_str"
  ]
}
export const flatMap = {}