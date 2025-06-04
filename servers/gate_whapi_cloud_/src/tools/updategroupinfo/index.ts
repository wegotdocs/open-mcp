import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updategroupinfo",
  "toolDescription": "Update group info",
  "baseUrl": "https://gate.whapi.cloud/",
  "path": "/groups/{GroupID}",
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
      "subject": "subject",
      "description": "description"
    }
  },
  inputParamsSchema
}

export default tool