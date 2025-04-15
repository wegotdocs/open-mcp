import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_admin_realms_realm_clients_client_uuid_",
  "toolDescription": "Update the client",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/clients/{client-uuid}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "body": {
      "id": "id",
      "clientId": "clientId",
      "name": "name",
      "description": "description",
      "type": "type",
      "rootUrl": "rootUrl",
      "adminUrl": "adminUrl",
      "baseUrl": "baseUrl",
      "surrogateAuthRequired": "surrogateAuthRequired",
      "enabled": "enabled",
      "alwaysDisplayInConsole": "alwaysDisplayInConsole",
      "clientAuthenticatorType": "clientAuthenticatorType",
      "secret": "secret",
      "registrationAccessToken": "registrationAccessToken",
      "redirectUris": "redirectUris",
      "webOrigins": "webOrigins",
      "notBefore": "notBefore",
      "bearerOnly": "bearerOnly",
      "consentRequired": "consentRequired",
      "standardFlowEnabled": "standardFlowEnabled",
      "implicitFlowEnabled": "implicitFlowEnabled",
      "directAccessGrantsEnabled": "directAccessGrantsEnabled",
      "serviceAccountsEnabled": "serviceAccountsEnabled",
      "authorizationServicesEnabled": "authorizationServicesEnabled",
      "publicClient": "publicClient",
      "frontchannelLogout": "frontchannelLogout",
      "protocol": "protocol",
      "attributes": "attributes",
      "authenticationFlowBindingOverrides": "authenticationFlowBindingOverrides",
      "fullScopeAllowed": "fullScopeAllowed",
      "nodeReRegistrationTimeout": "nodeReRegistrationTimeout",
      "registeredNodes": "registeredNodes",
      "protocolMappers": "protocolMappers",
      "defaultClientScopes": "defaultClientScopes",
      "optionalClientScopes": "optionalClientScopes",
      "authorizationSettings": "authorizationSettings",
      "access": "access",
      "origin": "origin"
    }
  },
  inputParamsSchema
}

export default tool