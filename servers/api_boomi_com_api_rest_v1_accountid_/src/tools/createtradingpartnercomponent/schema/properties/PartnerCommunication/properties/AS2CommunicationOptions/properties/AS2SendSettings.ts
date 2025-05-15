import { z } from "zod"

export const inputParamsSchema = {
  "AuthSettings": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `AuthSettings` to the tool, first call the tool `expandSchema` with \"/properties/PartnerCommunication/properties/AS2CommunicationOptions/properties/AS2SendSettings/properties/AuthSettings\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "authenticationType": z.enum(["NONE","BASIC"]).optional(),
  "clientSSLCertificate": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `clientSSLCertificate` to the tool, first call the tool `expandSchema` with \"/properties/PartnerCommunication/properties/AS2CommunicationOptions/properties/AS2SendSettings/properties/clientSSLCertificate\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "sslCertificate": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `sslCertificate` to the tool, first call the tool `expandSchema` with \"/properties/PartnerCommunication/properties/AS2CommunicationOptions/properties/AS2SendSettings/properties/sslCertificate\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "url": z.string(),
  "useDefaultSettings": z.boolean().optional(),
  "verifyHostname": z.boolean().optional()
}