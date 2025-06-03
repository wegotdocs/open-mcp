import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_v3_0_endpointsecurity_endpoints",
  "toolDescription": "Get endpoint list",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/endpointSecurity/endpoints",
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
      "select": "select"
    },
    "header": {
      "TMV1-Filter": "TMV1-Filter"
    }
  },
  inputParamsSchema
}

export default tool