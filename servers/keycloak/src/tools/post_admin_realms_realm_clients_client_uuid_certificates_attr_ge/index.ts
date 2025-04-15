import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_admin_realms_realm_clients_client_uuid_certificates_attr_ge",
  "toolDescription": "Generate a new keypair and certificate, and get the private key file\n\nGenerates a keypair and certificate and serves the private key in a specified keystore format.\nOnly generated public certificate is saved in Keycloak DB - the private key",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/clients/{client-uuid}/certificates/{attr}/generate-and-download",
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