import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "setgroupicon",
  "toolDescription": "Set group icon",
  "baseUrl": "https://gate.whapi.cloud/",
  "path": "/groups/{GroupID}/icon",
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
      "GroupID": "GroupID"
    },
    "body": {
      "media": "media",
      "mime_type": "mime_type"
    }
  },
  inputParamsSchema
}

export default tool