import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_istio_service_graph_api_istio_service_graph_environment_get",
  "toolDescription": "Get Istio Service Graph",
  "baseUrl": "https://api.example.com",
  "path": "/api/istio/service-graph/{environment}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "environment": "environment"
    }
  },
  inputParamsSchema
}

export default tool