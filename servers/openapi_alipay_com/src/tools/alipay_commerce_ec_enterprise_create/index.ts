export { inputParams } from "./schema/root.js"

export const toolName = `alipay_commerce_ec_enterprise_create`
export const toolDescription = `企业签约注册`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/commerce/ec/enterprise/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "biz_scene",
    "create_fund_account",
    "create_iot_group",
    "enterprise_alias",
    "enterprise_name",
    "group_app_id",
    "identity",
    "identity_name",
    "identity_open_id",
    "identity_type",
    "out_biz_no",
    "sign_return_url"
  ]
}
export const flatMap = {}