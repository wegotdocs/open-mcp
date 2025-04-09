export { inputParams } from "./schema/root.js"

export const toolName = `post_admin_realms_realm_clients`
export const toolDescription = `Create a new client Client’s client_id must be unique!`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/clients`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "id",
    "clientId",
    "name",
    "description",
    "type",
    "rootUrl",
    "adminUrl",
    "baseUrl",
    "surrogateAuthRequired",
    "enabled",
    "alwaysDisplayInConsole",
    "clientAuthenticatorType",
    "secret",
    "registrationAccessToken",
    "redirectUris",
    "webOrigins",
    "notBefore",
    "bearerOnly",
    "consentRequired",
    "standardFlowEnabled",
    "implicitFlowEnabled",
    "directAccessGrantsEnabled",
    "serviceAccountsEnabled",
    "authorizationServicesEnabled",
    "publicClient",
    "frontchannelLogout",
    "protocol",
    "attributes",
    "authenticationFlowBindingOverrides",
    "fullScopeAllowed",
    "nodeReRegistrationTimeout",
    "registeredNodes",
    "protocolMappers",
    "defaultClientScopes",
    "optionalClientScopes",
    "authorizationSettings",
    "access",
    "origin"
  ]
}
export const flatMap = {}