export { inputParams } from "./schema/root.js"

export const toolName = `alipay_fund_trans_toaccount_transfer`
export const toolDescription = `单笔转账到支付宝账户接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/fund/trans/toaccount/transfer`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "amount",
    "ext_param",
    "out_biz_no",
    "payee_account",
    "payee_real_name",
    "payee_type",
    "payer_real_name",
    "payer_show_name",
    "remark"
  ]
}
export const flatMap = {}