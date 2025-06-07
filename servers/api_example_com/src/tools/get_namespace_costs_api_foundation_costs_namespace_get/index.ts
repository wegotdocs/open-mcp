import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_namespace_costs_api_foundation_costs_namespace_get",
  "toolDescription": "Get Namespace Costs",
  "baseUrl": "https://api.example.com",
  "path": "/api/foundation/costs/{namespace}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "namespace": "namespace"
    },
    "query": {
      "use_cache": "use_cache"
    }
  },
  inputParamsSchema
}

export default tool