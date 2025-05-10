export { inputParams } from "./schema/root.js"

export const toolName = `alipay_data_dataservice_ad_conversion_upload`
export const toolDescription = `转化数据回传`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/data/dataservice/ad/conversion/upload`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "biz_token",
    "conversion_data_list"
  ]
}
export const flatMap = {}