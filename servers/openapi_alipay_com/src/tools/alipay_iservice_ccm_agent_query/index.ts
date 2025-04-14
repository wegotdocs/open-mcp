export { inputParams } from "./schema/root.js"

export const toolName = `alipay_iservice_ccm_agent_query`
export const toolDescription = `客服查询接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/iservice/ccm/agent/query`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "answering_mode",
    "ccs_instance_id",
    "chat_ext_group_ids",
    "chat_group_ids",
    "chat_level_ids",
    "email",
    "hotline_group_ids",
    "page_num",
    "page_size",
    "real_name",
    "role_ids"
  ]
}
export const flatMap = {}