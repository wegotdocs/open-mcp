import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "trunk_lookup_api_v1_lookup_trunk_post",
  "toolDescription": "Trunk Lookup",
  "baseUrl": "https://mcp.intelepeer-ops.com/v1",
  "path": "/api/v1/lookup/trunk",
  "method": "post",
  "security": [
    {
      "key": "session_id",
      "value": "<mcp-env-var>SESSION_ID</mcp-env-var>",
      "in": "cookie",
      "envVarName": "SESSION_ID"
    }
  ],
  "paramsMap": {
    "body": {
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool