export { inputParams } from "./schema/root.js"

export const toolName = `alipay_security_risk_customerrisk_send`
export const toolDescription = `商户数据同步`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/security/risk/customerrisk/send`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "bank_card_no",
    "business_license_no",
    "cert_no",
    "email_address",
    "external_id",
    "merch_name",
    "mobile",
    "mobile_ip",
    "order_ip",
    "pid",
    "plat_account",
    "process_code",
    "smid",
    "trade_no"
  ]
}
export const flatMap = {}