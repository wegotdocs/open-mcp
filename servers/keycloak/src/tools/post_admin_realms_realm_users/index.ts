export { inputParams } from "./schema/root.js"

export const toolName = `post_admin_realms_realm_users`
export const toolDescription = `Create a new user Username must be unique.`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/users`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "id",
    "username",
    "firstName",
    "lastName",
    "email",
    "emailVerified",
    "attributes",
    "userProfileMetadata",
    "self",
    "origin",
    "createdTimestamp",
    "enabled",
    "totp",
    "federationLink",
    "serviceAccountClientId",
    "credentials",
    "disableableCredentialTypes",
    "requiredActions",
    "federatedIdentities",
    "realmRoles",
    "clientRoles",
    "clientConsents",
    "notBefore",
    "groups",
    "access"
  ]
}
export const flatMap = {}