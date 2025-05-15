import { z } from "zod"

export const inputParamsSchema = {
  "dataContentType": z.string().optional(),
  "followRedirects": z.boolean().optional(),
  "methodType": z.enum(["GET","POST","PUT","DELETE"]).optional(),
  "pathElements": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `pathElements` to the tool, first call the tool `expandSchema` with \"/properties/PartnerCommunication/properties/HTTPCommunicationOptions/properties/HTTPSendOptions/properties/pathElements\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "reflectHeaders": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `reflectHeaders` to the tool, first call the tool `expandSchema` with \"/properties/PartnerCommunication/properties/HTTPCommunicationOptions/properties/HTTPSendOptions/properties/reflectHeaders\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "requestHeaders": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `requestHeaders` to the tool, first call the tool `expandSchema` with \"/properties/PartnerCommunication/properties/HTTPCommunicationOptions/properties/HTTPSendOptions/properties/requestHeaders\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "requestProfile": z.string().optional(),
  "requestProfileType": z.enum(["NONE","XML","JSON"]).optional(),
  "responseHeaderMapping": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `responseHeaderMapping` to the tool, first call the tool `expandSchema` with \"/properties/PartnerCommunication/properties/HTTPCommunicationOptions/properties/HTTPSendOptions/properties/responseHeaderMapping\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "responseProfile": z.string().optional(),
  "responseProfileType": z.enum(["NONE","XML","JSON"]).optional(),
  "returnErrors": z.boolean().optional(),
  "returnResponses": z.boolean().optional(),
  "useDefaultOptions": z.boolean().optional()
}