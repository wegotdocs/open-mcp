import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "shipping_zone": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `shipping_zone` to the tool, first call the tool `expandSchema` with \"/properties/shipping_zone\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Zones</property-description>").optional()
}