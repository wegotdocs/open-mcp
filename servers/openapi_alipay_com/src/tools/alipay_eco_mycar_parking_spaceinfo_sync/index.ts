export { inputParams } from "./schema/root.js"

export const toolName = `alipay_eco_mycar_parking_spaceinfo_sync`
export const toolDescription = `停车场车位信息同步`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/eco/mycar/parking/spaceinfo/sync`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "free_charging_pile",
    "free_parking_space",
    "parking_id",
    "parking_space_status"
  ]
}
export const flatMap = {}