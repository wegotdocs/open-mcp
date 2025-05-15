import { z } from "zod"

export const inputParamsSchema = {
  "externalURL": z.string(),
  "mdnClientSSLCert": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `mdnClientSSLCert` to the tool, first call the tool `expandSchema` with \"/properties/PartnerCommunication/properties/AS2CommunicationOptions/properties/AS2ReceiveOptions/properties/AS2DefaultPartnerMDNOptions/properties/mdnClientSSLCert\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "mdnDigestAlg": z.enum(["SHA1","SHA224","SHA256","SHA384","SHA512"]).optional(),
  "mdnSSLCert": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `mdnSSLCert` to the tool, first call the tool `expandSchema` with \"/properties/PartnerCommunication/properties/AS2CommunicationOptions/properties/AS2ReceiveOptions/properties/AS2DefaultPartnerMDNOptions/properties/mdnSSLCert\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "requestMDN": z.boolean().optional(),
  "signed": z.boolean().optional(),
  "synchronous": z.enum(["sync","async"]).optional(),
  "useExternalURL": z.boolean().optional(),
  "useSSL": z.boolean().optional()
}