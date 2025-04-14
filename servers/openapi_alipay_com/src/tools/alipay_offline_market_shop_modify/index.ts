export { inputParams } from "./schema/root.js"

export const toolName = `alipay_offline_market_shop_modify`
export const toolDescription = `修改门店信息`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/offline/market/shop/modify`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "address",
    "audit_images",
    "auth_letter",
    "avg_price",
    "biz_version",
    "box",
    "branch_shop_name",
    "brand_logo",
    "brand_name",
    "business_certificate",
    "business_certificate_expires",
    "business_time",
    "category_id",
    "city_code",
    "contact_number",
    "district_code",
    "implement_id",
    "is_operating_online",
    "is_show",
    "latitude",
    "licence",
    "licence_code",
    "licence_expires",
    "licence_name",
    "longitude",
    "main_image",
    "main_shop_name",
    "no_smoking",
    "notify_mobile",
    "notify_url",
    "online_image",
    "online_url",
    "op_id",
    "op_role",
    "operate_notify_url",
    "other_authorization",
    "parking",
    "partner_id",
    "pay_type",
    "province_code",
    "request_id",
    "shop_id",
    "store_id",
    "value_added",
    "version",
    "wifi"
  ]
}
export const flatMap = {}