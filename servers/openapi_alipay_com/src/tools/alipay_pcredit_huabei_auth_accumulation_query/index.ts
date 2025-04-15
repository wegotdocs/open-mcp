export { inputParams } from "./schema/root.js"

export const toolName = `alipay_pcredit_huabei_auth_accumulation_query`
export const toolDescription = `花芝轻会员周期累计数据查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/pcredit/huabei/auth/accumulation/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "agreement_no",
    "period",
    "alipay_user_id",
    "open_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}