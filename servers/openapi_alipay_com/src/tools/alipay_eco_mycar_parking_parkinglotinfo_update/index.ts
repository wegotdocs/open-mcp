export { inputParams } from "./schema/root.js"

export const toolName = `alipay_eco_mycar_parking_parkinglotinfo_update`
export const toolDescription = `修改停车场信息`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/eco/mycar/parking/parkinglotinfo/update`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "agent_id",
    "business_isv",
    "charging_rule",
    "city_id",
    "contact_alipay",
    "contact_email",
    "contact_mobile",
    "contact_name",
    "contact_tel",
    "contact_weixin",
    "equipment_name",
    "is_support_invoice",
    "isv_mobile",
    "latitude",
    "longitude",
    "mchnt_id",
    "original_isv_appid",
    "original_isv_mobile",
    "original_isv_name",
    "original_isv_pid",
    "out_parking_id",
    "parking_address",
    "parking_end_time",
    "parking_fee_description",
    "parking_fee_description_img",
    "parking_id",
    "parking_lot_type",
    "parking_mobile",
    "parking_name",
    "parking_number",
    "parking_poiid",
    "parking_start_time",
    "parking_type",
    "pay_type",
    "payment_mode",
    "serivce_url",
    "service_list",
    "shopingmall_id",
    "sum_space",
    "support_after_pay",
    "time_out"
  ]
}
export const flatMap = {}