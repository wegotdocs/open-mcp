import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_v3_0_endpointsecurity_versioncontrolpolicies_agentupdatepoli",
  "toolDescription": "Get agent update policies",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/endpointSecurity/versionControlPolicies/agentUpdatePolicies",
  "method": "get",
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