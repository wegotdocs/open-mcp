import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_existing_notification",
  "toolDescription": "Update existing notification",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/notifications/{id}",
  "method": "put",
  "security": [
    {
      "key": "access_token",
      "value": "<mcp-env-var>ACCESS_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "ACCESS_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "enabled": "enabled",
      "emailEnabledForProvider": "emailEnabledForProvider",
      "smsEnabledForProvider": "smsEnabledForProvider",
      "emailEnabledForCustomer": "emailEnabledForCustomer",
      "smsEnabledForCustomer": "smsEnabledForCustomer",
      "phoneCallEnabledForCustomer": "phoneCallEnabledForCustomer",
      "whatsappEnabledForCustomer": "whatsappEnabledForCustomer",
      "scheduleOffset": "scheduleOffset"
    }
  },
  inputParamsSchema
}

export default tool