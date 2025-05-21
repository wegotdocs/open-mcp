import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "cdr_lookup_api_v1_lookup_cdr_post",
  "toolDescription": "Cdr Lookup",
  "baseUrl": "https://mcp.intelepeer-ops.com/v1",
  "path": "/api/v1/lookup/cdr",
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
      "end-time": "end-time",
      "limit": "limit",
      "offset": "offset",
      "query": "query",
      "start-time": "start-time"
    }
  },
  inputParamsSchema
}

export default tool