import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_webhooks",
  "toolDescription": "",
  "baseUrl": "https://api.mercatop.com/v1",
  "path": "/webhooks",
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
    "body": {
      "name": "name",
      "status": "status",
      "topic": "topic",
      "secret": "secret",
      "delivery_url": "delivery_url"
    }
  },
  inputParamsSchema
}

export default tool