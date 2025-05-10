export { inputParams } from "./schema/root.js"

export const toolName = `zoloz_authentication_customer_facemanage_delete`
export const toolDescription = `热脸出库`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/zoloz/authentication/customer/facemanage/delete`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "areacode",
    "biz_type",
    "bizscale",
    "brandcode",
    "devicenum",
    "extinfo",
    "facetype",
    "faceval",
    "group",
    "storecode",
    "validtimes"
  ]
}
export const flatMap = {}