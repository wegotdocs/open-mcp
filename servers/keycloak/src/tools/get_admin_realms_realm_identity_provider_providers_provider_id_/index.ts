import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_identity_provider_providers_provider_id_",
  "toolDescription": "Get the identity provider factory for that provider id",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/identity-provider/providers/{provider_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "provider_id": "provider_id"
    }
  },
  inputParamsSchema
}

export default tool