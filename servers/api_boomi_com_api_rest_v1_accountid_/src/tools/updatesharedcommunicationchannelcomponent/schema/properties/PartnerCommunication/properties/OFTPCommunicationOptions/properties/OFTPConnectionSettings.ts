import { z } from "zod"

export const inputParamsSchema = {
  "clientSSLAlias": z.string().optional(),
  "defaultOFTPConnectionSettings": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `defaultOFTPConnectionSettings` to the tool, first call the tool `expandSchema` with \"/properties/PartnerCommunication/properties/OFTPCommunicationOptions/properties/OFTPConnectionSettings/properties/defaultOFTPConnectionSettings\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "host": z.string().optional(),
  "myPartnerInfo": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `myPartnerInfo` to the tool, first call the tool `expandSchema` with \"/properties/PartnerCommunication/properties/OFTPCommunicationOptions/properties/OFTPConnectionSettings/properties/myPartnerInfo\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "port": z.number().int().optional(),
  "sfidciph": z.number().int().optional(),
  "ssidauth": z.boolean().optional(),
  "tls": z.boolean().optional(),
  "useClientSSL": z.boolean().optional(),
  "useGateway": z.boolean().optional()
}