import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_admin_realms_realm_identity_provider_instances_alias_mappers",
  "toolDescription": "Update a mapper for the identity provider",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/identity-provider/instances/{alias}/mappers/{id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "id": "b_id",
      "name": "name",
      "identityProviderAlias": "identityProviderAlias",
      "identityProviderMapper": "identityProviderMapper",
      "config": "config"
    }
  },
  inputParamsSchema
}

export default tool