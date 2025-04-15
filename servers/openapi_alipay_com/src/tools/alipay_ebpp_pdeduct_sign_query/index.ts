export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_pdeduct_sign_query`
export const toolDescription = `直连代扣协议查询接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/pdeduct/sign/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "user_id",
    "open_id",
    "agreement_id",
    "biz_type",
    "sub_biz_type",
    "charge_inst",
    "bill_key"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}