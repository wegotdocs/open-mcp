import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_admin_realms_realm_users",
  "toolDescription": "Create a new user Username must be unique.",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/users",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "id": "id",
      "username": "username",
      "firstName": "firstName",
      "lastName": "lastName",
      "email": "email",
      "emailVerified": "emailVerified",
      "attributes": "attributes",
      "userProfileMetadata": "userProfileMetadata",
      "self": "self",
      "origin": "origin",
      "createdTimestamp": "createdTimestamp",
      "enabled": "enabled",
      "totp": "totp",
      "federationLink": "federationLink",
      "serviceAccountClientId": "serviceAccountClientId",
      "credentials": "credentials",
      "disableableCredentialTypes": "disableableCredentialTypes",
      "requiredActions": "requiredActions",
      "federatedIdentities": "federatedIdentities",
      "realmRoles": "realmRoles",
      "clientRoles": "clientRoles",
      "clientConsents": "clientConsents",
      "notBefore": "notBefore",
      "groups": "groups",
      "access": "access"
    }
  },
  inputParamsSchema
}

export default tool