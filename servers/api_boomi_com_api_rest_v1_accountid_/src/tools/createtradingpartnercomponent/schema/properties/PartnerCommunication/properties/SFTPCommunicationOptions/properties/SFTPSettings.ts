import { z } from "zod"

export const inputParamsSchema = {
  "SFTPProxySettings": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `SFTPProxySettings` to the tool, first call the tool `expandSchema` with \"/properties/PartnerCommunication/properties/SFTPCommunicationOptions/properties/SFTPSettings/properties/SFTPProxySettings\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "SFTPSSHOptions": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `SFTPSSHOptions` to the tool, first call the tool `expandSchema` with \"/properties/PartnerCommunication/properties/SFTPCommunicationOptions/properties/SFTPSettings/properties/SFTPSSHOptions\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "host": z.string(),
  "password": z.string(),
  "port": z.number().int(),
  "useDefaultSettings": z.boolean().optional(),
  "user": z.string()
}