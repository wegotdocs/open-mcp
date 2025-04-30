import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_tenant_token",
  "toolDescription": "Token request",
  "baseUrl": "https://api.example.com",
  "path": "/{tenant}/token",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "tenant": "tenant"
    }
  },
  inputParamsSchema
}

export default tool