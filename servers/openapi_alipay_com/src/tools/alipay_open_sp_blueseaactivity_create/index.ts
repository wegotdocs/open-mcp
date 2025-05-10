export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_sp_blueseaactivity_create`
export const toolDescription = `服务商返佣活动报名申请`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/sp/blueseaactivity/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "address",
    "biz_scene",
    "business_lic",
    "city_code",
    "district_code",
    "food_business_lic",
    "food_circulate_lic",
    "food_health_lic",
    "food_production_lic",
    "food_service_lic",
    "indoor_pic",
    "merchant_logon",
    "province_code",
    "shop_entrance_pic",
    "sub_merchant_id",
    "tobacco_lic"
  ]
}
export const flatMap = {}