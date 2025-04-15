export { inputParams } from "./schema/root.js"

export const toolName = `alipay_commerce_ec_jointaccountbill_detail_batchquery`
export const toolDescription = `企业账单批量分页查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/commerce/ec/jointaccountbill/detail/batchquery`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "enterprise_id",
    "biz_scene",
    "user_id",
    "open_id",
    "employee_id",
    "page_num",
    "page_size",
    "start_date",
    "end_date"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}