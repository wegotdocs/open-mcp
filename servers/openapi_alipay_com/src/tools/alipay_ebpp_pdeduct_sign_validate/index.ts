export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_pdeduct_sign_validate`
export const toolDescription = `缴费直连代扣签约前置校验`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/pdeduct/sign/validate`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "agent_channel",
    "agent_code",
    "bill_key",
    "biz_type",
    "charge_inst",
    "deduct_type",
    "extend_field",
    "notify_config",
    "open_id",
    "out_agreement_id",
    "owner_name",
    "pay_config",
    "pid",
    "sign_expire_date",
    "sub_biz_type",
    "user_id"
  ]
}
export const flatMap = {}