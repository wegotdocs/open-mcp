import { z } from "zod"

export const inputParams = {
  "delivery_single_material": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `delivery_single_material` to the tool, first call the tool `expandSchema` with \"/properties/delivery_base_info/properties/delivery_material/properties/delivery_single_material\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "material_id_list": z.array(z.string()).describe("素材ID，通过alipay.marketing.material.create接口提供的素材组").optional()
}