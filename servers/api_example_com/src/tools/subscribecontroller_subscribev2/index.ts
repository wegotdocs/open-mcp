import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "subscribecontroller_subscribev2",
  "toolDescription": "v2 for any new subscribers.",
  "baseUrl": "https://api.example.com",
  "path": "/api/v2/subscriptions/{id}",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "notificationUrl": "notificationUrl",
      "providerName": "providerName",
      "config": "config"
    },
    "header": {
      "Authorization": "Authorization"
    }
  },
  inputParamsSchema
}

export default tool