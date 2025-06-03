import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_v3_0_threatintel_feeds",
  "toolDescription": "List intelligence objects from Trend Threat Intelligence Feed",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/threatintel/feeds",
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
      "topReport": "topReport",
      "responseObjectFormat": "responseObjectFormat"
    },
    "header": {
      "TMV1-Contextual-Filter": "TMV1-Contextual-Filter"
    }
  },
  inputParamsSchema
}

export default tool