export { inputParams } from "./schema/root.js"

export const toolName = `alipay_user_alipaypoint_send`
export const toolDescription = `集分宝发放接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/user/alipaypoint/send`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "budget_code",
    "memo",
    "open_id",
    "partner_biz_no",
    "point_amount",
    "user_account",
    "user_id"
  ]
}
export const flatMap = {}