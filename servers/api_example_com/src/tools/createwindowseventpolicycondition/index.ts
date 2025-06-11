import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createwindowseventpolicycondition",
  "toolDescription": "Create windows event condition",
  "baseUrl": "https://api.example.com",
  "path": "/v2/policies/{policy_id}/condition/windows-event",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    },
    {
      "key": "sessionKey",
      "value": "<mcp-env-var>SESSIONKEY</mcp-env-var>",
      "in": "cookie",
      "envVarName": "SESSIONKEY"
    }
  ],
  "paramsMap": {
    "path": {
      "policy_id": "policy_id"
    },
    "body": {
      "enabled": "enabled",
      "displayName": "displayName",
      "severity": "severity",
      "priority": "priority",
      "channels": "channels",
      "scripts": "scripts",
      "notificationAction": "notificationAction",
      "notifyOnReset": "notifyOnReset",
      "resetThreshold": "resetThreshold",
      "source": "source",
      "eventIds": "eventIds",
      "text": "text",
      "occurrence": "occurrence"
    }
  },
  inputParamsSchema
}

export default tool