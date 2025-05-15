import { z } from "zod"

export const inputParamsSchema = {
  "OFTPPartnerGroup": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `OFTPPartnerGroup` to the tool, first call the tool `expandSchema` with \"/properties/PartnerCommunication/properties/OFTPCommunicationOptions/properties/OFTPSendOptions/properties/OFTPPartnerGroup\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "OFTPSendOptions": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `OFTPSendOptions` to the tool, first call the tool `expandSchema` with \"/properties/PartnerCommunication/properties/OFTPCommunicationOptions/properties/OFTPSendOptions/properties/OFTPSendOptions\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "partnerGroupId": z.string().optional()
}