export { inputParams } from "./schema/root.js"

export const toolName = `alipay_eco_edu_kt_schoolinfo_modify`
export const toolDescription = `教育缴费学校信息录入接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/eco/edu/kt/schoolinfo/modify`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "bank_notify_url",
    "bank_partner_id",
    "bank_uid",
    "bankcard_no",
    "batch_no",
    "card_alias_no",
    "city_code",
    "city_name",
    "corporate_branch_pid",
    "district_code",
    "district_name",
    "isv_name",
    "isv_no",
    "isv_notify_url",
    "isv_phone",
    "isv_pid",
    "province_code",
    "province_name",
    "school_icon",
    "school_icon_type",
    "school_name",
    "school_pid",
    "school_stdcode",
    "school_type",
    "smid",
    "trans_in",
    "white_channel_code"
  ]
}
export const flatMap = {}