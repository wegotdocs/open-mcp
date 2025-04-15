import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_events",
  "toolDescription": "Get events Returns all events, or filters them based on URL query parameters listed here",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/events",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "client": "client",
      "dateFrom": "dateFrom",
      "dateTo": "dateTo",
      "direction": "direction",
      "first": "first",
      "ipAddress": "ipAddress",
      "max": "max",
      "type": "type",
      "user": "user"
    }
  },
  inputParamsSchema
}

export default tool