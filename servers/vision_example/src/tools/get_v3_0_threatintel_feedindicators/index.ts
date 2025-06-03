import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_v3_0_threatintel_feedindicators",
  "toolDescription": "List IoCs from Trend Threat Intelligence Feed",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/threatintel/feedIndicators",
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
      "top": "top",
      "indicatorObjectFormat": "indicatorObjectFormat"
    }
  },
  inputParamsSchema
}

export default tool