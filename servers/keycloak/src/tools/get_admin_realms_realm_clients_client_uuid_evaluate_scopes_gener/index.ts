import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_clients_client_uuid_evaluate_scopes_gener",
  "toolDescription": "Create JSON with payload of example user info",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/clients/{client-uuid}/evaluate-scopes/generate-example-userinfo",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "scope": "scope",
      "userId": "userId"
    }
  },
  inputParamsSchema
}

export default tool