export { inputParams } from "./schema/root.js"

export const toolName = `alipay_fund_trans_common_query`
export const toolDescription = `转账业务单据查询接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/fund/trans/common/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "product_code",
    "biz_scene",
    "out_biz_no",
    "order_id",
    "pay_fund_order_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}