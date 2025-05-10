export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_search_boxactivity_apply`
export const toolDescription = `申请创建搜索直达活动配置`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/search/boxactivity/apply`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "action_url",
    "background_word",
    "box_id",
    "end_time",
    "material_id",
    "material_type",
    "merchant_id",
    "oriented_rule",
    "start_time",
    "target_appid",
    "target_appname",
    "target_regions",
    "title",
    "video_info"
  ]
}
export const flatMap = {}