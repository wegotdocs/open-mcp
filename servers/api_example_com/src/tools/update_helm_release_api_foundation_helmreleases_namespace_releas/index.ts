import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_helm_release_api_foundation_helmreleases_namespace_releas",
  "toolDescription": "Update Helm Release",
  "baseUrl": "https://api.example.com",
  "path": "/api/foundation/helmreleases/{namespace}/{release_name}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "namespace": "namespace",
      "release_name": "release_name"
    }
  },
  inputParamsSchema
}

export default tool