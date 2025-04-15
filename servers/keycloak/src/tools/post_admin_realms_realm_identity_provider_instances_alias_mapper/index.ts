import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_admin_realms_realm_identity_provider_instances_alias_mapper",
  "toolDescription": "Add a mapper to identity provider",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/identity-provider/instances/{alias}/mappers",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "id": "id",
      "name": "name",
      "identityProviderAlias": "identityProviderAlias",
      "identityProviderMapper": "identityProviderMapper",
      "config": "config"
    }
  },
  inputParamsSchema
}

export default tool