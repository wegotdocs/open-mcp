export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_templatemsg_maketingstatus_modify`
export const toolDescription = `小程序模板消息营销投放详情状态修改`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/templatemsg/maketingstatus/modify`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "detail_id",
    "status"
  ]
}
export const flatMap = {}