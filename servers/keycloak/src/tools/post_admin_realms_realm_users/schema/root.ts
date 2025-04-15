import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().optional(),
  "username": z.string().optional(),
  "firstName": z.string().optional(),
  "lastName": z.string().optional(),
  "email": z.string().optional(),
  "emailVerified": z.boolean().optional(),
  "attributes": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `attributes` to the tool, first call the tool `expandSchema` with \"/properties/attributes\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "userProfileMetadata": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `userProfileMetadata` to the tool, first call the tool `expandSchema` with \"/properties/userProfileMetadata\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "self": z.string().optional(),
  "origin": z.string().optional(),
  "createdTimestamp": z.number().int().optional(),
  "enabled": z.boolean().optional(),
  "totp": z.boolean().optional(),
  "federationLink": z.string().optional(),
  "serviceAccountClientId": z.string().optional(),
  "credentials": z.array(z.object({ "id": z.string().optional(), "type": z.string().optional(), "userLabel": z.string().optional(), "createdDate": z.number().int().optional(), "secretData": z.string().optional(), "credentialData": z.string().optional(), "priority": z.number().int().optional(), "value": z.string().optional(), "temporary": z.boolean().optional(), "federationLink": z.string().optional() })).optional(),
  "disableableCredentialTypes": z.array(z.string()).optional(),
  "requiredActions": z.array(z.string()).optional(),
  "federatedIdentities": z.array(z.object({ "identityProvider": z.string().optional(), "userId": z.string().optional(), "userName": z.string().optional() })).optional(),
  "realmRoles": z.array(z.string()).optional(),
  "clientRoles": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `clientRoles` to the tool, first call the tool `expandSchema` with \"/properties/clientRoles\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "clientConsents": z.array(z.object({ "clientId": z.string().optional(), "grantedClientScopes": z.array(z.string()).optional(), "createdDate": z.number().int().optional(), "lastUpdatedDate": z.number().int().optional() })).optional(),
  "notBefore": z.number().int().optional(),
  "groups": z.array(z.string()).optional(),
  "access": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `access` to the tool, first call the tool `expandSchema` with \"/properties/access\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}