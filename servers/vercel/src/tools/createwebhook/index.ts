import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createwebhook",
  "toolDescription": "Creates a webhook",
  "baseUrl": "https://api.vercel.com",
  "path": "/v1/webhooks",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "teamId": "teamId",
      "slug": "slug"
    },
    "body": {
      "url": "url",
      "events": "events",
      "projectIds": "projectIds"
    }
  },
  inputParamsSchema
}

export default tool