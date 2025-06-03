import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_v3_0_search_sensorstatistics",
  "toolDescription": "Query endpoint sensor statistics",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/search/sensorStatistics",
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
      "period": "period"
    }
  },
  inputParamsSchema
}

export default tool