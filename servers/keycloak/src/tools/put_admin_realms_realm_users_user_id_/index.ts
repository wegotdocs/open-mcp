export { inputParams } from "./schema/root.js"

export const toolName = `put_admin_realms_realm_users_user_id_`
export const toolDescription = `Update the user`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/users/{user-id}`
export const method = `put`
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