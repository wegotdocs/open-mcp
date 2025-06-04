import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "joinincommunitygroup",
  "toolDescription": "Join in community group",
  "baseUrl": "https://gate.whapi.cloud/",
  "path": "/communities/{CommunityID}/{GroupID}/join",
  "method": "post",
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
      "CommunityID": "CommunityID",
      "GroupID": "GroupID"
    }
  },
  inputParamsSchema
}

export default tool