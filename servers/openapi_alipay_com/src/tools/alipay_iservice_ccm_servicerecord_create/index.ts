export { inputParams } from "./schema/root.js"

export const toolName = `alipay_iservice_ccm_servicerecord_create`
export const toolDescription = `创建服务记录`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/iservice/ccm/servicerecord/create`
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
    "memo",
    "modifier_id",
    "outbound_task_id",
    "satisfaction",
    "satisfaction_memo",
    "service_source",
    "service_time",
    "skillgroup_id",
    "skillgroup_name",
    "tnt_inst_id",
    "user_id",
    "verify_result"
  ]
}
export const flatMap = {}