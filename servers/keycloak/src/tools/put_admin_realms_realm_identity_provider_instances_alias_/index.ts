export { inputParams } from "./schema/root.js"

export const toolName = `put_admin_realms_realm_identity_provider_instances_alias_`
export const toolDescription = `Update the identity provider`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/identity-provider/instances/{alias}`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "alias",
    "displayName",
    "internalId",
    "providerId",
    "enabled",
    "trustEmail",
    "storeToken",
    "addReadTokenRoleOnCreate",
    "authenticateByDefault",
    "linkOnly",
    "hideOnLogin",
    "firstBrokerLoginFlowAlias",
    "postBrokerLoginFlowAlias",
    "organizationId",
    "config"
  ]
}
export const flatMap = {}