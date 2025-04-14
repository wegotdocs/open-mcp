export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_public_life_label_delete`
export const toolDescription = `标签删除接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/public/life/label/delete`
export const method = `delete`
export const security = []
export const keys = {
  "query": [
    "label_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}