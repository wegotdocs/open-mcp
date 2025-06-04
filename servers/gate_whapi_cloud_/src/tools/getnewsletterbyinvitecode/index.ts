import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getnewsletterbyinvitecode",
  "toolDescription": "Get newsletter info by invite code",
  "baseUrl": "https://gate.whapi.cloud/",
  "path": "/newsletters/link/{NewsletterInviteCode}",
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
      "NewsletterInviteCode": "NewsletterInviteCode"
    }
  },
  inputParamsSchema
}

export default tool