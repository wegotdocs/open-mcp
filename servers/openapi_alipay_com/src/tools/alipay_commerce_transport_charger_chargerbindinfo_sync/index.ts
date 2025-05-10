export { inputParams } from "./schema/root.js"

export const toolName = `alipay_commerce_transport_charger_chargerbindinfo_sync`
export const toolDescription = `充电运营商同步用户绑定充电桩信息接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/commerce/transport/charger/chargerbindinfo/sync`
export const method = `post`
export const security = []
export const keys = {
  "query": [
    "auth_token"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "bind_qrcode",
    "bind_status",
    "bind_time",
    "connector_type",
    "current_output_type",
    "equip_id",
    "equip_imei",
    "equip_name",
    "equip_sn",
    "equip_status",
    "equip_type_no",
    "operator_id",
    "operator_uid",
    "rated_current",
    "rated_power",
    "rated_voltage",
    "unbind_time"
  ]
}
export const flatMap = {}