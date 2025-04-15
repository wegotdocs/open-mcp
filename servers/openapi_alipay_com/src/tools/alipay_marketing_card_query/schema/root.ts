import { z } from "zod"

export const inputParams = {
  "card_user_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `card_user_info` to the tool, first call the tool `expandSchema` with \"/properties/card_user_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "ext_info": z.string().describe("扩展信息，暂时没有").optional(),
  "target_card_no": z.string().describe("操作卡号。\t若target_card_no_type为  BIZ_CARD，则该值为业务卡号，即alipay.marketing.card.open(会员卡开卡)返回结果中的card_info#biz_card_no。\t若target_card_no_type为 D_QR_CODE 或D_BAR_CODE，则该值为动态码值。\t若target_card_no_type为 EXTERNAL_CARD，则该值为外部卡号。").optional(),
  "target_card_no_type": z.string().describe("卡号ID类型").optional(),
  "template_id": z.string().describe("会员卡模板id。调用<a href=\"https://opendocs.alipay.com/open/03sx80?scene=common&pathHash=04270a28\" target=\"_blank\">alipay.marketing.card.template.create</a>（会员卡模板创建接口）创建模板后同步返回。").optional()
}