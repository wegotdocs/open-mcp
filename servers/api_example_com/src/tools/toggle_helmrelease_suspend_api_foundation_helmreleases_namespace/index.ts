import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "toggle_helmrelease_suspend_api_foundation_helmreleases_namespace",
  "toolDescription": "Toggle Helmrelease Suspend",
  "baseUrl": "https://api.example.com",
  "path": "/api/foundation/helmreleases/{namespace}/{release_name}/suspend",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "namespace": "namespace",
      "release_name": "release_name"
    },
    "query": {
      "suspend": "suspend"
    }
  },
  inputParamsSchema
}

export default tool