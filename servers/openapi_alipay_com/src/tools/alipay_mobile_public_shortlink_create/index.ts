export { inputParams } from "./schema/root.js"

export const toolName = `alipay_mobile_public_shortlink_create`
export const toolDescription = `服务窗短链自主生成接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/mobile/public/shortlink/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "biz_content"
  ]
}
export const flatMap = {}