export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_card_template_modify`
export const toolDescription = `会员卡模板修改`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/card/template/modify`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "access_version",
    "biz_no_prefix",
    "biz_no_suffix_len",
    "card_action_list",
    "card_level_conf",
    "card_spec_tag",
    "column_info_list",
    "field_rule_list",
    "mdcode_notify_conf",
    "open_card_conf",
    "paid_outer_card_conf",
    "pub_channels",
    "request_id",
    "shop_ids",
    "spi_app_id",
    "template_benefit_info",
    "template_form_config",
    "template_id",
    "template_style_info",
    "write_off_type"
  ]
}
export const flatMap = {}