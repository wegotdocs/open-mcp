export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_search_boxactivity_modify`
export const toolDescription = `修改搜索直达活动配置`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/search/boxactivity/modify`
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
    "box_activity_id",
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