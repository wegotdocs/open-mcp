import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "rep_lookup_api_v1_case_rep_get",
  "toolDescription": "Rep Lookup",
  "baseUrl": "https://mcp.intelepeer-ops.com/v1",
  "path": "/api/v1/case/rep",
  "method": "get",
  "security": [
    {
      "key": "session_id",
      "value": "<mcp-env-var>SESSION_ID</mcp-env-var>",
      "in": "cookie",
      "envVarName": "SESSION_ID"
    }
  ],
  "paramsMap": {
    "query": {
      "case_number": "case_number"
    }
  },
  inputParamsSchema
}

export default tool