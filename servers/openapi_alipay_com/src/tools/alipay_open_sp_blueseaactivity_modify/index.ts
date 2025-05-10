export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_sp_blueseaactivity_modify`
export const toolDescription = `服务商返佣活动申请单修改`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/sp/blueseaactivity/modify`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "address",
    "business_lic",
    "city_code",
    "district_code",
    "food_business_lic",
    "food_circulate_lic",
    "food_health_lic",
    "food_production_lic",
    "food_service_lic",
    "indoor_pic",
    "order_id",
    "province_code",
    "shop_entrance_pic",
    "tobacco_lic"
  ]
}
export const flatMap = {}