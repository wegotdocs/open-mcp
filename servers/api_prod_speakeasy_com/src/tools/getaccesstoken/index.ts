import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getaccesstoken",
  "toolDescription": "Get or refresh an access token for the current workspace.",
  "baseUrl": "https://api.prod.speakeasy.com",
  "path": "/v1/auth/access_token",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "workspace_id": "workspace_id"
    }
  },
  inputParamsSchema
}

export default tool