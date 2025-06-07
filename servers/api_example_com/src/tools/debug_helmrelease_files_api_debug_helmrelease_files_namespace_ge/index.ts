import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "debug_helmrelease_files_api_debug_helmrelease_files_namespace_ge",
  "toolDescription": "Debug Helmrelease Files",
  "baseUrl": "https://api.example.com",
  "path": "/api/debug/helmrelease-files/{namespace}",
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