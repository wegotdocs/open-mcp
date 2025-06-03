import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_v3_0_threatintel_tasks",
  "toolDescription": "List tasks",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/threatintel/tasks",
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
      "orderBy": "orderBy",
      "filter": "filter",
      "startDateTime": "startDateTime",
      "endDateTime": "endDateTime",
      "top": "top"
    }
  },
  inputParamsSchema
}

export default tool