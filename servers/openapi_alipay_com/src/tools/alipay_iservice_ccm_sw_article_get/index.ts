export { inputParams } from "./schema/root.js"

export const toolName = `alipay_iservice_ccm_sw_article_get`
export const toolDescription = `知识库-问答-获取`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/iservice/ccm/sw/article/get`
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