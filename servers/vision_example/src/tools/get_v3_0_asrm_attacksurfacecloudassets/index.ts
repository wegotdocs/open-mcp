import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_v3_0_asrm_attacksurfacecloudassets",
  "toolDescription": "Get cloud assets information",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/asrm/attackSurfaceCloudAssets",
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
      "top": "top",
      "lastDetectedStartDateTime": "lastDetectedStartDateTime",
      "lastDetectedEndDateTime": "lastDetectedEndDateTime",
      "firstSeenStartDateTime": "firstSeenStartDateTime",
      "firstSeenEndDateTime": "firstSeenEndDateTime"
    },
    "header": {
      "TMV1-Filter": "TMV1-Filter"
    }
  },
  inputParamsSchema
}

export default tool