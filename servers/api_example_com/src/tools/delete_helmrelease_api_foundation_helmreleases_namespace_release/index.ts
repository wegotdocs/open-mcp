import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_helmrelease_api_foundation_helmreleases_namespace_release",
  "toolDescription": "Delete Helmrelease",
  "baseUrl": "https://api.example.com",
  "path": "/api/foundation/helmreleases/{namespace}/{release_name}",
  "method": "delete",
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