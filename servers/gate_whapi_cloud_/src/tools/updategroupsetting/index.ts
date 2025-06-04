import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updategroupsetting",
  "toolDescription": "Update group setting",
  "baseUrl": "https://gate.whapi.cloud/",
  "path": "/groups/{GroupID}",
  "method": "patch",
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
      "setting": "setting",
      "policy": "policy"
    }
  },
  inputParamsSchema
}

export default tool