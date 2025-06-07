import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_service_graph_api_istio_service_graph_namespace_get",
  "toolDescription": "Get Service Graph",
  "baseUrl": "https://api.example.com",
  "path": "/api/istio/service-graph/{namespace}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "namespace": "namespace"
    }
  },
  inputParamsSchema
}

export default tool