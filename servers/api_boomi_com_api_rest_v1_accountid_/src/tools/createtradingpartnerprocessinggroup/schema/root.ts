import { z } from "zod"

export const inputParamsSchema = {
  "DefaultRouting": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `DefaultRouting` to the tool, first call the tool `expandSchema` with \"/properties/DefaultRouting\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "DocumentRouting": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `DocumentRouting` to the tool, first call the tool `expandSchema` with \"/properties/DocumentRouting\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "PartnerRouting": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `PartnerRouting` to the tool, first call the tool `expandSchema` with \"/properties/PartnerRouting\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "TradingPartners": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `TradingPartners` to the tool, first call the tool `expandSchema` with \"/properties/TradingPartners\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "componentId": z.string().optional(),
  "componentName": z.string().optional(),
  "deleted": z.boolean().optional(),
  "description": z.string().optional(),
  "folderId": z.number().int().optional(),
  "folderName": z.string().optional()
}