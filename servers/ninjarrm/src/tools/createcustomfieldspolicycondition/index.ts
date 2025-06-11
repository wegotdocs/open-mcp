import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createcustomfieldspolicycondition",
  "toolDescription": "Create custom fields policy condition",
  "baseUrl": "https://app.ninjarmm.com/v2/",
  "path": "/v2/policies/{policy_id}/condition/custom-fields",
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
      "matchAll": "matchAll",
      "matchAny": "matchAny"
    }
  },
  inputParamsSchema
}

export default tool