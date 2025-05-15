import { z } from "zod"

export const inputParamsSchema = {
  "clientSSLCertificate": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `clientSSLCertificate` to the tool, first call the tool `expandSchema` with \"/properties/PartnerCommunication/properties/FTPCommunicationOptions/properties/FTPSettings/properties/FTPSSLOptions/properties/clientSSLCertificate\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "sslmode": z.enum(["none","explicit","implicit"]).optional(),
  "useClientAuthentication": z.boolean().optional()
}