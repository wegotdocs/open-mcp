import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_v3_0_sandbox_tasks",
  "toolDescription": "List submissions",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/sandbox/tasks",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "startDateTime": "startDateTime",
      "endDateTime": "endDateTime",
      "dateTimeTarget": "dateTimeTarget",
      "orderBy": "orderBy",
      "filter": "filter",
      "top": "top"
    }
  },
  inputParamsSchema
}

export default tool