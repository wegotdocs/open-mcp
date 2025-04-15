export { inputParams } from "./schema/root.js"

export const toolName = `zhima_merchant_zmgo_template_create`
export const toolDescription = `商户创建芝麻GO模板接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/zhima/merchant/zmgo/template/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "basic_config",
    "ext_config",
    "obligation_config",
    "open_config",
    "quit_config",
    "right_config",
    "settlement_config"
  ]
}
export const flatMap = {}