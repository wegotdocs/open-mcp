import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_v3_0_asrm_attacksurfacecloudassets_id_riskindicatorevents",
  "toolDescription": "Get cloud asset risk indicators",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/asrm/attackSurfaceCloudAssets/{id}/riskIndicatorEvents",
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
    "path": {
      "id": "id"
    },
    "query": {
      "top": "top",
      "orderBy": "orderBy"
    },
    "header": {
      "TMV1-Filter": "TMV1-Filter"
    }
  },
  inputParamsSchema
}

export default tool