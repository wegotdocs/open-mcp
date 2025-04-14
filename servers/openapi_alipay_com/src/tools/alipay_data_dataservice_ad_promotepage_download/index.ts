export { inputParams } from "./schema/root.js"

export const toolName = `alipay_data_dataservice_ad_promotepage_download`
export const toolDescription = `自建推广页留资数据查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/data/dataservice/ad/promotepage/download`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "start_date",
    "end_date",
    "page_no",
    "page_size",
    "biz_token",
    "principal_tag",
    "promote_page_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}