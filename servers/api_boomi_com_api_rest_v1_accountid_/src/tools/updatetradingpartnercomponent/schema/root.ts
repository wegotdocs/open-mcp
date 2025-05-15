import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "ContactInfo": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `ContactInfo` to the tool, first call the tool `expandSchema` with \"/properties/ContactInfo\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "PartnerCommunication": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `PartnerCommunication` to the tool, first call the tool `expandSchema` with \"/properties/PartnerCommunication\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "PartnerCommunicationTypes": z.array(z.string()).optional(),
  "PartnerDocumentTypes": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `PartnerDocumentTypes` to the tool, first call the tool `expandSchema` with \"/properties/PartnerDocumentTypes\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "PartnerInfo": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `PartnerInfo` to the tool, first call the tool `expandSchema` with \"/properties/PartnerInfo\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "classification": z.enum(["tradingpartner","mycompany"]).optional(),
  "componentId": z.string().optional(),
  "componentName": z.string().optional(),
  "deleted": z.boolean().optional(),
  "description": z.string().optional(),
  "folderId": z.number().int().optional(),
  "folderName": z.string().optional(),
  "identifier": z.string().optional(),
  "organizationId": z.string().optional(),
  "standard": z.enum(["x12","edifact","hl7","custom","rosettanet","tradacoms","odette"]).optional()
}