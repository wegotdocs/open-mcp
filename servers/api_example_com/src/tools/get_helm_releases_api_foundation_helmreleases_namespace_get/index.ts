import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_helm_releases_api_foundation_helmreleases_namespace_get",
  "toolDescription": "Get Helm Releases",
  "baseUrl": "https://api.example.com",
  "path": "/api/foundation/helmreleases/{namespace}",
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