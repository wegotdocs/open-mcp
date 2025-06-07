import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "check_domain_health_api_health_domain_get",
  "toolDescription": "Check Domain Health",
  "baseUrl": "https://api.example.com",
  "path": "/api/health/domain",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "url": "url"
    }
  },
  inputParamsSchema
}

export default tool