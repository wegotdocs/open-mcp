import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_tenant_openid4vc_verify_state_",
  "toolDescription": "Verify vp_token response, for a verification request identified by the state",
  "baseUrl": "https://api.example.com",
  "path": "/{tenant}/openid4vc/verify/{state}",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "tenant": "tenant",
      "state": "state"
    }
  },
  inputParamsSchema
}

export default tool