export { inputParams } from "./schema/root.js"

export const toolName = `alipay_eco_contract_signflows_create`
export const toolDescription = `创建电子合同签署流程(E签宝)`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/eco/contract/signflows/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [
    "target_app_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "attachments",
    "business_scene",
    "config_info",
    "template_infos"
  ]
}
export const flatMap = {}