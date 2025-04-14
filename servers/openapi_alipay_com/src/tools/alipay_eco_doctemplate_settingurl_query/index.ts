export { inputParams } from "./schema/root.js"

export const toolName = `alipay_eco_doctemplate_settingurl_query`
export const toolDescription = `获取合同模板设置地址（E签宝）`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/eco/doctemplate/settingurl/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "target_app_id",
    "template_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}