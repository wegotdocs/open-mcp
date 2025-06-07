import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "check_domain_health_curl_api_health_check_get",
  "toolDescription": "Check Domain Health Curl",
  "baseUrl": "https://api.example.com",
  "path": "/api/health/check",
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