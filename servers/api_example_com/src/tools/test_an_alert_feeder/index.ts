import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "test_an_alert_feeder",
  "toolDescription": "Test an alert feeder http request.",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/connector/alert-feeder/test",
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
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    },
    {
      "key": "THEHIVE-SESSION",
      "value": "<mcp-env-var>THEHIVE_SESSION</mcp-env-var>",
      "in": "cookie",
      "envVarName": "THEHIVE_SESSION"
    }
  ],
  "paramsMap": {
    "body": {
      "name": "name",
      "description": "description",
      "method": "method",
      "url": "url",
      "interval": "interval",
      "body": "body",
      "headers": "headers",
      "enabled": "enabled",
      "auth": "auth",
      "proxyConfig": "proxyConfig",
      "requestTimeout": "requestTimeout",
      "responseMaxSize": "responseMaxSize"
    }
  },
  inputParamsSchema
}

export default tool