import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_api_v1_0_tenant_issuer_request_jwt",
  "toolDescription": "Create a new credential offer on OIDC credential exchange flow.",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1.0/{tenant}/issuer/request/jwt",
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
      "autoAccept": "autoAccept",
      "callback": "callback",
      "expires": "expires",
      "rawRequest": "rawRequest",
      "revocable": "revocable",
      "templateRequest": "templateRequest"
    }
  },
  inputParamsSchema
}

export default tool