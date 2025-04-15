import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_admin_realms_realm_clients_client_uuid_certificates_attr_do",
  "toolDescription": "Get a keystore file for the client, containing private key and public certificate",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/clients/{client-uuid}/certificates/{attr}/download",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "realmCertificate": "realmCertificate",
      "storePassword": "storePassword",
      "keyPassword": "keyPassword",
      "keyAlias": "keyAlias",
      "realmAlias": "realmAlias",
      "format": "format"
    }
  },
  inputParamsSchema
}

export default tool