import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_v3_0_threatintel_intelligencereports",
  "toolDescription": "List custom intelligence reports",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/threatintel/intelligenceReports",
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