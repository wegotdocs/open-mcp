import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().optional(),
  "name": z.string().optional(),
  "description": z.string().optional(),
  "composite": z.boolean().optional(),
  "composites": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `composites` to the tool, first call the tool `expandSchema` with \"/properties/defaultRole/properties/composites\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "clientRole": z.boolean().optional(),
  "containerId": z.string().optional(),
  "attributes": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `attributes` to the tool, first call the tool `expandSchema` with \"/properties/defaultRole/properties/attributes\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}