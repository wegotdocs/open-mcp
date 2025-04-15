import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_clients",
  "toolDescription": "Get clients belonging to the realm.",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/clients",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "clientId": "clientId",
      "first": "first",
      "max": "max",
      "q": "q",
      "search": "search",
      "viewableOnly": "viewableOnly"
    }
  },
  inputParamsSchema
}

export default tool