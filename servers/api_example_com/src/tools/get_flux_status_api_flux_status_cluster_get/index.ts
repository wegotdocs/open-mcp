import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_flux_status_api_flux_status_cluster_get",
  "toolDescription": "Get Flux Status",
  "baseUrl": "https://api.example.com",
  "path": "/api/flux-status/{cluster}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "cluster": "cluster"
    }
  },
  inputParamsSchema
}

export default tool