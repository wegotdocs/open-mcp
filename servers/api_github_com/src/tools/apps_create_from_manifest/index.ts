import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "apps_create_from_manifest",
  "toolDescription": "Create a GitHub App from a manifest",
  "baseUrl": "https://api.github.com",
  "path": "/app-manifests/{code}/conversions",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "code": "code"
    }
  },
  inputParamsSchema
}

export default tool