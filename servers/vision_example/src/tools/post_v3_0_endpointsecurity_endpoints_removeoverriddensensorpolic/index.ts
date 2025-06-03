import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_v3_0_endpointsecurity_endpoints_removeoverriddensensorpolic",
  "toolDescription": "Remove overriden endpoint security policy settings",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/endpointSecurity/endpoints/removeOverriddenSensorPolicy",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {},
  inputParamsSchema
}

export default tool