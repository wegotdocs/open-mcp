import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_admin_realms_realm_clients_initial_access",
  "toolDescription": "Create a new initial access token.",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/clients-initial-access",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "expiration": "expiration",
      "count": "count"
    }
  },
  inputParamsSchema
}

export default tool