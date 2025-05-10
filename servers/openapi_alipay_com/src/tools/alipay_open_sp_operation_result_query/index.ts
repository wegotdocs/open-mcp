export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_sp_operation_result_query`
export const toolDescription = `查询服务商代运营操作结果`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/sp/operation/result/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "operate_type",
    "batch_no",
    "access_product_code",
    "merchant_no",
    "alipay_account",
    "isv_scene_permissions"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}