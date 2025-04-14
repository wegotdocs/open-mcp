export { inputParams } from "./schema/root.js"

export const toolName = `alipay_iservice_ccm_agent_schedulelog_query`
export const toolDescription = `查询客服状态变更流水日志`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/iservice/ccm/agent/schedulelog/query`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "agent_ids",
    "ccs_instance_id",
    "end_time",
    "limit",
    "page_num",
    "page_size",
    "start_id",
    "start_time"
  ]
}
export const flatMap = {}