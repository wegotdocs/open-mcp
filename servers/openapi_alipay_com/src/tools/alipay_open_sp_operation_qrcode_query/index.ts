export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_sp_operation_qrcode_query`
export const toolDescription = `查询代运营授权或者账号绑定二维码`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/sp/operation/qrcode/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "out_biz_no",
    "operate_type",
    "merchant_no",
    "alipay_account",
    "access_product_code",
    "isv_scene_permissions"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}