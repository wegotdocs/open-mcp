import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_foundation_status_history_api_foundation_status_namespace_hi",
  "toolDescription": "Get Foundation Status History",
  "baseUrl": "https://api.example.com",
  "path": "/api/foundation/status/{namespace}/history",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "namespace": "namespace"
    },
    "query": {
      "hours": "hours",
      "limit": "limit"
    }
  },
  inputParamsSchema
}

export default tool