import { z } from "zod"

export const inputParamsSchema = {
  "authType": z.string(),
  "cacheAuthenticationTimeout": z.number().int().optional(),
  "cacheAuthorizationCredentials": z.boolean().optional(),
  "clientCertificateHeaderName": z.string(),
  "loginModuleClassName": z.string(),
  "loginModuleOptions": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `loginModuleOptions` to the tool, first call the tool `expandSchema` with \"/properties/generalSettings/properties/authentication/properties/loginModuleOptions\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>")
}