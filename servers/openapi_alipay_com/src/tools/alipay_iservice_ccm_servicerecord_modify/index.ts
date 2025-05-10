export { inputParams } from "./schema/root.js"

export const toolName = `alipay_iservice_ccm_servicerecord_modify`
export const toolDescription = `变更服务记录`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/iservice/ccm/servicerecord/modify`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "acid",
    "aid",
    "ani",
    "asid",
    "category_list",
    "chat_begin_time",
    "chat_end_time",
    "city",
    "creator_id",
    "discon_symbol",
    "dnis",
    "file_size",
    "gmt_create",
    "gmt_modified",
    "id",
    "memo",
    "modifier_id",
    "outbound_task_id",
    "satisfaction",
    "satisfaction_memo",
    "service_source",
    "service_time",
    "skillgroup_id",
    "skillgroup_name",
    "status",
    "tnt_inst_id",
    "user_id",
    "verify_result"
  ]
}
export const flatMap = {}