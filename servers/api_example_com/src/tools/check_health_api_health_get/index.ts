import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "check_health_api_health_get",
  "toolDescription": "Check Health",
  "baseUrl": "https://api.example.com",
  "path": "/api/health",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "include_details": "include_details"
    }
  },
  inputParamsSchema
}

export default tool