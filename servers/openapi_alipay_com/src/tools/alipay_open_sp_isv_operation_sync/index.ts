export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_sp_isv_operation_sync`
export const toolDescription = `服务商作业结果数据回传`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/sp/isv/operation/sync`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "customer_type",
    "ext_info",
    "implement_end_time",
    "implement_object_name",
    "implement_place",
    "implement_result",
    "implement_result_image",
    "implement_result_remark",
    "implement_start_time",
    "item_code",
    "item_price",
    "merchant_pid",
    "mini_appid",
    "oppor_id",
    "order_id",
    "out_biz_no",
    "promotor_pid",
    "shop_id",
    "sub_promotor_pid"
  ]
}
export const flatMap = {}