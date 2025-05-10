export { inputParams } from "./schema/root.js"

export const toolName = `alipay_boss_fnc_userinvoiceinfo_query`
export const toolDescription = `根据PID获取相关的开票资料`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/boss/fnc/userinvoiceinfo/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "pid"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}