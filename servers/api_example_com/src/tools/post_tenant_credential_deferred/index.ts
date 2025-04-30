import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_tenant_credential_deferred",
  "toolDescription": "Deferred credential request",
  "baseUrl": "https://api.example.com",
  "path": "/{tenant}/credential_deferred",
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