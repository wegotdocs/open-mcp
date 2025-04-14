import { z } from "zod"

export const inputParams = {
  "fields": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `fields` to the tool, first call the tool `expandSchema` with \"/properties/template_form_config/properties/fields\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "open_card_mini_app_id": z.string().describe("入会时承接入会弹层的小程序appId").optional()
}