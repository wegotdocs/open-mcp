import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "read_me_api_v1_auth_me_get",
  "toolDescription": "Read Me",
  "baseUrl": "https://mcp.intelepeer-ops.com/v1",
  "path": "/api/v1/auth/me",
  "method": "get",
  "security": [
    {
      "key": "session_id",
      "value": "<mcp-env-var>SESSION_ID</mcp-env-var>",
      "in": "cookie",
      "envVarName": "SESSION_ID"
    }
  ],
  "paramsMap": {},
  inputParamsSchema
}

export default tool