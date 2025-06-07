import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "prefetch_foundation_data_api_foundation_prefetch_namespace_post",
  "toolDescription": "Prefetch Foundation Data",
  "baseUrl": "https://api.example.com",
  "path": "/api/foundation/prefetch/{namespace}",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "namespace": "namespace"
    }
  },
  inputParamsSchema
}

export default tool