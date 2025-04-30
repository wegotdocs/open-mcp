import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_api_v1_0_tenant_verifier_complete_request_uid_",
  "toolDescription": "Complete the Verify flow with a specific result.",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1.0/{tenant}/verifier/complete/{request_uid}",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "tenant": "tenant",
      "request_uid": "request_uid"
    },
    "body": {
      "availableActions": "availableActions",
      "messages": "messages",
      "reason": "reason",
      "status": "status"
    }
  },
  inputParamsSchema
}

export default tool