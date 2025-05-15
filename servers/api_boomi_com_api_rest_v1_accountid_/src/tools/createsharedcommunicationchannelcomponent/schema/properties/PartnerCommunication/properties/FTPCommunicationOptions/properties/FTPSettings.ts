import { z } from "zod"

export const inputParamsSchema = {
  "FTPSSLOptions": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `FTPSSLOptions` to the tool, first call the tool `expandSchema` with \"/properties/PartnerCommunication/properties/FTPCommunicationOptions/properties/FTPSettings/properties/FTPSSLOptions\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "connectionMode": z.enum(["active","passive"]).optional(),
  "host": z.string(),
  "password": z.string(),
  "port": z.number().int(),
  "useDefaultSettings": z.boolean().optional(),
  "user": z.string()
}