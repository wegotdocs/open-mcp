export { inputParams } from "./schema/root.js"

export const toolName = `alipay_eco_signflows_detail_query`
export const toolDescription = `获取签署流程合同与附件的下载地址（E签宝）`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/eco/signflows/detail/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "target_app_id",
    "flow_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}