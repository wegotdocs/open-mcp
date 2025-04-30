import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_tenant_authorize",
  "toolDescription": "Authorize request",
  "baseUrl": "https://api.example.com",
  "path": "/{tenant}/authorize",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "tenant": "tenant"
    }
  },
  inputParamsSchema
}

export default tool