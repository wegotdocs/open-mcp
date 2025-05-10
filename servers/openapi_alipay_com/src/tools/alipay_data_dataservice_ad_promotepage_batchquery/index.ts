export { inputParams } from "./schema/root.js"

export const toolName = `alipay_data_dataservice_ad_promotepage_batchquery`
export const toolDescription = `自建推广页列表批量查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/data/dataservice/ad/promotepage/batchquery`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "biz_token",
    "principal_tag",
    "type",
    "page_no",
    "page_size"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}