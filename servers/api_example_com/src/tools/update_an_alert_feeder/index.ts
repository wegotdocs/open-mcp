import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_an_alert_feeder",
  "toolDescription": "Update an alert feeder from its name.",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/connector/alert-feeder/{alertFeederName}",
  "method": "put",
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
    "path": {
      "alertFeederName": "alertFeederName"
    },
    "body": {
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