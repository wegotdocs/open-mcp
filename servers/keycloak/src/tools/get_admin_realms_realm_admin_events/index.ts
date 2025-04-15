import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_admin_events",
  "toolDescription": "Get admin events Returns all admin events, or filters events based on URL query parameters listed here",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/admin-events",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "authClient": "authClient",
      "authIpAddress": "authIpAddress",
      "authRealm": "authRealm",
      "authUser": "authUser",
      "dateFrom": "dateFrom",
      "dateTo": "dateTo",
      "direction": "direction",
      "first": "first",
      "max": "max",
      "operationTypes": "operationTypes",
      "resourcePath": "resourcePath",
      "resourceTypes": "resourceTypes"
    }
  },
  inputParamsSchema
}

export default tool