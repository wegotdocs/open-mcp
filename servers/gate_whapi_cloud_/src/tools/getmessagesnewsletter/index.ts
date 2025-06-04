import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getmessagesnewsletter",
  "toolDescription": "Get newsletter messages",
  "baseUrl": "https://gate.whapi.cloud/",
  "path": "/newsletters/{NewsletterID}/messages",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    },
    {
      "key": "token",
      "value": "<mcp-env-var>TOKEN</mcp-env-var>",
      "in": "query",
      "envVarName": "TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "NewsletterID": "NewsletterID"
    },
    "query": {
      "count": "count",
      "before": "before",
      "after": "after"
    }
  },
  inputParamsSchema
}

export default tool