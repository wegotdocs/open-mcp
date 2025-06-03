import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "patch_v3_0_endpointsecurity_versioncontrolpolicypriorities_id_",
  "toolDescription": "Modify version control policy priority",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/endpointSecurity/versionControlPolicyPriorities/{id}",
  "method": "patch",
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
    "body": {
      "agentUpdateStatus": "agentUpdateStatus",
      "agentUpdatePolicy": "agentUpdatePolicy",
      "componentUpdatePolicy": "componentUpdatePolicy"
    }
  },
  inputParamsSchema
}

export default tool