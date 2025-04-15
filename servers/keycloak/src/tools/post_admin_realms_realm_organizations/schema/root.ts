import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().optional(),
  "name": z.string().optional(),
  "alias": z.string().optional(),
  "enabled": z.boolean().optional(),
  "description": z.string().optional(),
  "redirectUrl": z.string().optional(),
  "attributes": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `attributes` to the tool, first call the tool `expandSchema` with \"/properties/attributes\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "domains": z.array(z.object({ "name": z.string().optional(), "verified": z.boolean().optional() })).optional(),
  "members": z.array(z.object({ "id": z.string().optional(), "username": z.string().optional(), "firstName": z.string().optional(), "lastName": z.string().optional(), "email": z.string().optional(), "emailVerified": z.boolean().optional(), "attributes": z.record(z.array(z.string())).optional(), "userProfileMetadata": z.object({ "attributes": z.array(z.object({ "name": z.string().optional(), "displayName": z.string().optional(), "required": z.boolean().optional(), "readOnly": z.boolean().optional(), "annotations": z.record(z.any()).optional(), "validators": z.record(z.record(z.any())).optional(), "group": z.string().optional(), "multivalued": z.boolean().optional() })).optional(), "groups": z.array(z.object({ "name": z.string().optional(), "displayHeader": z.string().optional(), "displayDescription": z.string().optional(), "annotations": z.record(z.any()).optional() })).optional() }).optional(), "self": z.string().optional(), "origin": z.string().optional(), "createdTimestamp": z.number().int().optional(), "enabled": z.boolean().optional(), "totp": z.boolean().optional(), "federationLink": z.string().optional(), "serviceAccountClientId": z.string().optional(), "credentials": z.array(z.object({ "id": z.string().optional(), "type": z.string().optional(), "userLabel": z.string().optional(), "createdDate": z.number().int().optional(), "secretData": z.string().optional(), "credentialData": z.string().optional(), "priority": z.number().int().optional(), "value": z.string().optional(), "temporary": z.boolean().optional(), "federationLink": z.string().optional() })).optional(), "disableableCredentialTypes": z.array(z.string()).optional(), "requiredActions": z.array(z.string()).optional(), "federatedIdentities": z.array(z.object({ "identityProvider": z.string().optional(), "userId": z.string().optional(), "userName": z.string().optional() })).optional(), "realmRoles": z.array(z.string()).optional(), "clientRoles": z.record(z.array(z.string())).optional(), "clientConsents": z.array(z.object({ "clientId": z.string().optional(), "grantedClientScopes": z.array(z.string()).optional(), "createdDate": z.number().int().optional(), "lastUpdatedDate": z.number().int().optional() })).optional(), "notBefore": z.number().int().optional(), "groups": z.array(z.string()).optional(), "access": z.record(z.boolean()).optional(), "membershipType": z.enum(["UNMANAGED","MANAGED"]).optional() })).optional(),
  "identityProviders": z.array(z.object({ "alias": z.string().optional(), "displayName": z.string().optional(), "internalId": z.string().optional(), "providerId": z.string().optional(), "enabled": z.boolean().optional(), "trustEmail": z.boolean().optional(), "storeToken": z.boolean().optional(), "addReadTokenRoleOnCreate": z.boolean().optional(), "authenticateByDefault": z.boolean().optional(), "linkOnly": z.boolean().optional(), "hideOnLogin": z.boolean().optional(), "firstBrokerLoginFlowAlias": z.string().optional(), "postBrokerLoginFlowAlias": z.string().optional(), "organizationId": z.string().optional(), "config": z.record(z.string()).optional() })).optional()
}