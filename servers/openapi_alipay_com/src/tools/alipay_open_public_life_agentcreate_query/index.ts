export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_public_life_agentcreate_query`
export const toolDescription = `isv代创建生活号申请状态查询接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/public/life/agentcreate/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "out_biz_no"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}