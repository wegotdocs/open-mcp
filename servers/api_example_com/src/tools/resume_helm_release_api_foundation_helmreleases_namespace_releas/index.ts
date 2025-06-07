import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "resume_helm_release_api_foundation_helmreleases_namespace_releas",
  "toolDescription": "Resume Helm Release",
  "baseUrl": "https://api.example.com",
  "path": "/api/foundation/helmreleases/{namespace}/{release_name}/resume",
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