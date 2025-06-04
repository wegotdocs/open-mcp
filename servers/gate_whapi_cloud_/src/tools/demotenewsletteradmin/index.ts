import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "demotenewsletteradmin",
  "toolDescription": "Demote Newsletter admin",
  "baseUrl": "https://gate.whapi.cloud/",
  "path": "/newsletters/{NewsletterID}/admins/{ContactID}",
  "method": "delete",
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
      "NewsletterID": "NewsletterID",
      "ContactID": "ContactID"
    }
  },
  inputParamsSchema
}

export default tool