import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_foundation_status_api_foundation_status_namespace_get",
  "toolDescription": "Get Foundation Status",
  "baseUrl": "https://api.example.com",
  "path": "/api/foundation/status/{namespace}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "namespace": "namespace"
    },
    "query": {
      "include_secrets": "include_secrets",
      "include_configmaps": "include_configmaps",
      "include_costs": "include_costs",
      "use_cache": "use_cache"
    }
  },
  inputParamsSchema
}

export default tool