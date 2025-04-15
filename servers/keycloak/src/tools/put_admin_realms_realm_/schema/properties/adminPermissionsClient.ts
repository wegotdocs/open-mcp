import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().optional(),
  "clientId": z.string().optional(),
  "name": z.string().optional(),
  "description": z.string().optional(),
  "type": z.string().optional(),
  "rootUrl": z.string().optional(),
  "adminUrl": z.string().optional(),
  "baseUrl": z.string().optional(),
  "surrogateAuthRequired": z.boolean().optional(),
  "enabled": z.boolean().optional(),
  "alwaysDisplayInConsole": z.boolean().optional(),
  "clientAuthenticatorType": z.string().optional(),
  "secret": z.string().optional(),
  "registrationAccessToken": z.string().optional(),
  "redirectUris": z.array(z.string()).optional(),
  "webOrigins": z.array(z.string()).optional(),
  "notBefore": z.number().int().optional(),
  "bearerOnly": z.boolean().optional(),
  "consentRequired": z.boolean().optional(),
  "standardFlowEnabled": z.boolean().optional(),
  "implicitFlowEnabled": z.boolean().optional(),
  "directAccessGrantsEnabled": z.boolean().optional(),
  "serviceAccountsEnabled": z.boolean().optional(),
  "authorizationServicesEnabled": z.boolean().optional(),
  "publicClient": z.boolean().optional(),
  "frontchannelLogout": z.boolean().optional(),
  "protocol": z.string().optional(),
  "attributes": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `attributes` to the tool, first call the tool `expandSchema` with \"/properties/adminPermissionsClient/properties/attributes\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "authenticationFlowBindingOverrides": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `authenticationFlowBindingOverrides` to the tool, first call the tool `expandSchema` with \"/properties/adminPermissionsClient/properties/authenticationFlowBindingOverrides\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "fullScopeAllowed": z.boolean().optional(),
  "nodeReRegistrationTimeout": z.number().int().optional(),
  "registeredNodes": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `registeredNodes` to the tool, first call the tool `expandSchema` with \"/properties/adminPermissionsClient/properties/registeredNodes\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "protocolMappers": z.array(z.object({ "id": z.string().optional(), "name": z.string().optional(), "protocol": z.string().optional(), "protocolMapper": z.string().optional(), "config": z.record(z.string()).optional() })).optional(),
  "defaultClientScopes": z.array(z.string()).optional(),
  "optionalClientScopes": z.array(z.string()).optional(),
  "authorizationSettings": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `authorizationSettings` to the tool, first call the tool `expandSchema` with \"/properties/adminPermissionsClient/properties/authorizationSettings\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "access": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `access` to the tool, first call the tool `expandSchema` with \"/properties/adminPermissionsClient/properties/access\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "origin": z.string().optional()
}