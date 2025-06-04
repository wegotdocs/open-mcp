import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "copystory",
  "toolDescription": "Copy story",
  "baseUrl": "https://gate.whapi.cloud/",
  "path": "/stories/{MessageID}",
  "method": "put",
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
      "MessageID": "MessageID"
    },
    "body": {
      "contacts": "contacts",
      "exclude_contacts": "exclude_contacts"
    }
  },
  inputParamsSchema
}

export default tool