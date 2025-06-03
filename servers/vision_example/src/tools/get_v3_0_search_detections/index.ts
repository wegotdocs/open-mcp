import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_v3_0_search_detections",
  "toolDescription": "Get detection data",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/search/detections",
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
      "mode": "mode",
      "select": "select"
    },
    "header": {
      "TMV1-Query": "TMV1-Query"
    }
  },
  inputParamsSchema
}

export default tool