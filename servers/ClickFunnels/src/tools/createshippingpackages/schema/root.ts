import { z } from "zod"

export const inputParamsSchema = {
  "workspace_id": z.number().int(),
  "shipping_package": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `shipping_package` to the tool, first call the tool `expandSchema` with \"/properties/shipping_package\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Packages</property-description>").optional()
}