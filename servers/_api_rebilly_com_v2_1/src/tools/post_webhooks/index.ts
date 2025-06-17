import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_webhooks",
  "toolDescription": "Create a webhook",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/webhooks",
  "method": "post",
  "security": [
    {
      "key": "REB-APIKEY",
      "value": "<mcp-env-var>REB_APIKEY</mcp-env-var>",
      "in": "header",
      "envVarName": "REB_APIKEY"
    }
  ],
  "paramsMap": {
    "body": {
      "id": "id",
      "eventsFilter": "eventsFilter",
      "status": "status",
      "method": "method",
      "url": "url",
      "headers": "headers",
      "credentialHash": "credentialHash",
      "createdTime": "createdTime",
      "updatedTime": "updatedTime",
      "_links": "_links"
    }
  },
  inputParamsSchema
}

export default tool