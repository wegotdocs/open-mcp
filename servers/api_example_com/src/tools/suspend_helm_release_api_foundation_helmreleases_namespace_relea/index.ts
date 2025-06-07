import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "suspend_helm_release_api_foundation_helmreleases_namespace_relea",
  "toolDescription": "Suspend Helm Release",
  "baseUrl": "https://api.example.com",
  "path": "/api/foundation/helmreleases/{namespace}/{release_name}/suspend",
  "method": "post",
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