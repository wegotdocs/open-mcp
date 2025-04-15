export { inputParams } from "./schema/root.js"

export const toolName = `alipay_eco_mycar_parking_chargeinfo_sync`
export const toolDescription = `停车场价格信息同步`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/eco/mycar/parking/chargeinfo/sync`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "business_hours",
    "car_daylight_advanced_price",
    "car_daylight_base_price",
    "car_night_advanced_price",
    "car_night_base_price",
    "car_onetime_price",
    "daily_price_upperbound",
    "daylight_business_hours",
    "free_period",
    "has_charging_pile",
    "is_charge",
    "night_business_hours",
    "parking_id",
    "parking_space_count",
    "remark",
    "truck_daylight_advanced_price",
    "truck_daylight_base_price",
    "truck_night_advanced_price",
    "truck_night_base_price",
    "truck_onetime_price"
  ]
}
export const flatMap = {}