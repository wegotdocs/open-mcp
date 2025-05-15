import { z } from "zod"

export const inputParamsSchema = {
  "PartnerArchiving": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `PartnerArchiving` to the tool, first call the tool `expandSchema` with \"/properties/PartnerArchiving\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "PartnerCommunication": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `PartnerCommunication` to the tool, first call the tool `expandSchema` with \"/properties/PartnerCommunication\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "communicationType": z.string().optional(),
  "componentId": z.string().optional(),
  "componentName": z.string().optional(),
  "deleted": z.boolean().optional(),
  "description": z.string().optional(),
  "folderId": z.number().int().optional(),
  "folderName": z.string().optional()
}