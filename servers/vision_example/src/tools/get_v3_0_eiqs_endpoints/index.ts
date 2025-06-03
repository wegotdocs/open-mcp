import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_v3_0_eiqs_endpoints",
  "toolDescription": "Get detailed endpoint list",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/eiqs/endpoints",
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
      "top": "top"
    },
    "header": {
      "TMV1-Query": "TMV1-Query"
    }
  },
  inputParamsSchema
}

export default tool