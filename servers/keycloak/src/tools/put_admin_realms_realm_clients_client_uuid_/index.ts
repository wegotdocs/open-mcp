export { inputParams } from "./schema/root.js"

export const toolName = `put_admin_realms_realm_clients_client_uuid_`
export const toolDescription = `Update the client`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/clients/{client-uuid}`
export const method = `put`
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