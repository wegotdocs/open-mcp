import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_v3_0_endpointsecurity_endpoints_export",
  "toolDescription": "Export information about endpoints",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/endpointSecurity/endpoints/export",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "filter": "filter",
      "orderBy": "orderBy"
    }
  },
  inputParamsSchema
}

export default tool