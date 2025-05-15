import { z } from "zod"

export const inputParamsSchema = {
  "encryptionPublicCertificate": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `encryptionPublicCertificate` to the tool, first call the tool `expandSchema` with \"/properties/PartnerInfo/properties/RosettaNetPartnerInfo/properties/RosettaNetControlInfo/properties/encryptionPublicCertificate\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "globalPartnerClassificationCode": z.string().optional(),
  "globalUsageCode": z.enum(["Test","Production"]).optional(),
  "partnerId": z.string().optional(),
  "partnerIdType": z.literal("DUNS").optional(),
  "partnerLocation": z.string().optional(),
  "signingPublicCertificate": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `signingPublicCertificate` to the tool, first call the tool `expandSchema` with \"/properties/PartnerInfo/properties/RosettaNetPartnerInfo/properties/RosettaNetControlInfo/properties/signingPublicCertificate\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "supplyChainCode": z.string().optional()
}