import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_admin_realms_realm_default_optional_client_scopes_clientscop",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/default-optional-client-scopes/{clientScopeId}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "clientScopeId": "clientScopeId"
    }
  },
  inputParamsSchema
}

export default tool