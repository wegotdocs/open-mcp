export { inputParams } from "./schema/root.js"

export const toolName = `post_admin_realms_realm_identity_provider_instances`
export const toolDescription = `Create a new identity provider`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/identity-provider/instances`
export const method = `post`
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