import { z } from "zod"

export const inputParamsSchema = {
  "HTTPAuthSettings": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `HTTPAuthSettings` to the tool, first call the tool `expandSchema` with \"/properties/PartnerCommunication/properties/HTTPCommunicationOptions/properties/HTTPSettings/properties/HTTPAuthSettings\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "HTTPOAuth2Settings": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `HTTPOAuth2Settings` to the tool, first call the tool `expandSchema` with \"/properties/PartnerCommunication/properties/HTTPCommunicationOptions/properties/HTTPSettings/properties/HTTPOAuth2Settings\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "HTTPOAuthSettings": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `HTTPOAuthSettings` to the tool, first call the tool `expandSchema` with \"/properties/PartnerCommunication/properties/HTTPCommunicationOptions/properties/HTTPSettings/properties/HTTPOAuthSettings\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "HTTPSSLOptions": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `HTTPSSLOptions` to the tool, first call the tool `expandSchema` with \"/properties/PartnerCommunication/properties/HTTPCommunicationOptions/properties/HTTPSettings/properties/HTTPSSLOptions\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "authenticationType": z.enum(["NONE","BASIC","PASSWORD_DIGEST","CUSTOM","OAUTH","OAUTH2"]).optional(),
  "connectTimeout": z.number().int().optional(),
  "cookieScope": z.enum(["IGNORED","GLOBAL","CONNECTOR_SHAPE"]).optional(),
  "readTimeout": z.number().int().optional(),
  "url": z.string().optional(),
  "useBasicAuth": z.boolean().optional(),
  "useCustomAuth": z.boolean().optional(),
  "useDefaultSettings": z.boolean().optional()
}