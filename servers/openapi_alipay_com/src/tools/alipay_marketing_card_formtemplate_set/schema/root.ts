import { z } from "zod"

export const inputParams = {
  "fields": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `fields` to the tool, first call the tool `expandSchema` with \"/properties/fields\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "template_id": z.string().describe("会员卡模板id。调用alipay.marketing.card.template.create（会员卡模板创建接口）创建模板后同步返回。").optional()
}