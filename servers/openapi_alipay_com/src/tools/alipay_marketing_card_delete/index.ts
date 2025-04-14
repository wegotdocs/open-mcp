export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_card_delete`
export const toolDescription = `会员卡删卡`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/card/delete`
export const method = `delete`
export const security = []
export const keys = {
  "query": [
    "out_serial_no",
    "target_card_no",
    "target_card_no_type",
    "reason_code",
    "ext_info"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}