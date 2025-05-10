export { inputParams } from "./schema/root.js"

export const toolName = `alipay_user_info_share`
export const toolDescription = `支付宝会员授权信息查询接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/user/info/share`
export const method = `post`
export const security = []
export const keys = {
  "query": [
    "auth_token"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}