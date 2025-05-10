export { inputParams } from "./schema/root.js"

export const toolName = `alipay_iservice_ccm_ols_chatrecord_query`
export const toolDescription = `查询某通在线服务的聊天记录`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/iservice/ccm/ols/chatrecord/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "ccs_instance_id",
    "id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}