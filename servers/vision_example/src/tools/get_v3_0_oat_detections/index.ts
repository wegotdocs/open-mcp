import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_v3_0_oat_detections",
  "toolDescription": "Get Observed Attack Techniques events",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/oat/detections",
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
      "detectedStartDateTime": "detectedStartDateTime",
      "detectedEndDateTime": "detectedEndDateTime",
      "ingestedStartDateTime": "ingestedStartDateTime",
      "ingestedEndDateTime": "ingestedEndDateTime",
      "top": "top"
    },
    "header": {
      "TMV1-Filter": "TMV1-Filter"
    }
  },
  inputParamsSchema
}

export default tool