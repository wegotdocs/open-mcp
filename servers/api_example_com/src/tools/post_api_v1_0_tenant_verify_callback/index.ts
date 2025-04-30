import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_api_v1_0_tenant_verify_callback",
  "toolDescription": "Handle waltid callback for verify",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1.0/{tenant}/verify/callback",
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