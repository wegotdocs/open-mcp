import { z } from "zod"

export const inputParamsSchema = {
  "cd": z.boolean().optional(),
  "defaultPartnerSettings": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `defaultPartnerSettings` to the tool, first call the tool `expandSchema` with \"/properties/PartnerCommunication/properties/OFTPCommunicationOptions/properties/OFTPSendOptions/properties/OFTPSendOptions/properties/defaultPartnerSettings\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "operation": z.string().optional(),
  "sfiddesc": z.string().optional(),
  "sfiddsn": z.string().optional()
}