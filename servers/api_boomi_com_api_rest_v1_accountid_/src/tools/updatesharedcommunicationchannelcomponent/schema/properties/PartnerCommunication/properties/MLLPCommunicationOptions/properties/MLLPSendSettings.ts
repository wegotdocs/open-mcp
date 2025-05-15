import { z } from "zod"

export const inputParamsSchema = {
  "MLLPSSLOptions": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `MLLPSSLOptions` to the tool, first call the tool `expandSchema` with \"/properties/PartnerCommunication/properties/MLLPCommunicationOptions/properties/MLLPSendSettings/properties/MLLPSSLOptions\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "endBlock": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `endBlock` to the tool, first call the tool `expandSchema` with \"/properties/PartnerCommunication/properties/MLLPCommunicationOptions/properties/MLLPSendSettings/properties/endBlock\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "endData": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `endData` to the tool, first call the tool `expandSchema` with \"/properties/PartnerCommunication/properties/MLLPCommunicationOptions/properties/MLLPSendSettings/properties/endData\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "haltTimeout": z.boolean().optional(),
  "host": z.string(),
  "inactivityTimeout": z.number().int().optional(),
  "maxConnections": z.number().int().optional(),
  "maxRetry": z.number().int().optional(),
  "persistent": z.boolean().optional(),
  "port": z.number().int(),
  "receiveTimeout": z.number().int().optional(),
  "sendTimeout": z.number().int().optional(),
  "startBlock": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `startBlock` to the tool, first call the tool `expandSchema` with \"/properties/PartnerCommunication/properties/MLLPCommunicationOptions/properties/MLLPSendSettings/properties/startBlock\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>")
}