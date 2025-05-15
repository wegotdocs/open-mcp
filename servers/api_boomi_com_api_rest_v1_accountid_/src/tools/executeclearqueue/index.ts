import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "executeclearqueue",
  "toolDescription": "Executes an action on a ClearQueue object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/ClearQueue/execute/{id}",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "AtomId": "AtomId",
      "DLQ": "DLQ",
      "QueueName": "QueueName",
      "SubscriberName": "SubscriberName"
    }
  },
  inputParamsSchema
}

export default tool