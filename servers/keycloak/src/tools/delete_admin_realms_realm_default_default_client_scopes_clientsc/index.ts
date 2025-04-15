import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_admin_realms_realm_default_default_client_scopes_clientsc",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/default-default-client-scopes/{clientScopeId}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "clientScopeId": "clientScopeId"
    }
  },
  inputParamsSchema
}

export default tool