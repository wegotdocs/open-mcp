import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_api_v1_0_tenant_verifier_request_multiple_use",
  "toolDescription": "Create a new multiple-use Verify request.",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1.0/{tenant}/verifier/request/multiple-use",
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
      "tenant": "tenant"
    },
    "body": {
      "callback": "callback",
      "expires": "expires",
      "pdId": "pdId",
      "pdRaw": "pdRaw",
      "syncResponse": "syncResponse",
      "toComplete": "toComplete"
    }
  },
  inputParamsSchema
}

export default tool