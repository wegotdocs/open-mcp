export { inputParams } from "./schema/root.js"

export const toolName = `ant_merchant_expand_shop_consult`
export const toolDescription = `蚂蚁店铺创建咨询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/ant/merchant/expand/shop/consult`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "biz_cards",
    "brand_id",
    "business_address",
    "business_time",
    "cert_image",
    "cert_name",
    "cert_no",
    "cert_type",
    "contact_infos",
    "contact_mobile",
    "contact_phone",
    "ext_infos",
    "ip_role_id",
    "legal_cert_no",
    "legal_name",
    "license_auth_letter_image",
    "memo",
    "out_door_images",
    "qualifications",
    "scene",
    "settle_alipay_logon_id",
    "shop_category",
    "shop_name",
    "shop_type",
    "store_id"
  ]
}
export const flatMap = {}