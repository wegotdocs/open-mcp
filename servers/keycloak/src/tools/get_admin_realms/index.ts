import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms",
  "toolDescription": "Get accessible realms Returns a list of accessible realms. The list is filtered based on what realms the caller is allowed to view.",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "briefRepresentation": "briefRepresentation"
    }
  },
  inputParamsSchema
}

export default tool