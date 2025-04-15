export { inputParams } from "./schema/root.js"

export const toolName = `alipay_eco_file_path_query`
export const toolDescription = `获取文件直传地址（E签宝）`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/eco/file/path/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "target_app_id",
    "content_md_5",
    "content_type",
    "file_name",
    "file_size"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}