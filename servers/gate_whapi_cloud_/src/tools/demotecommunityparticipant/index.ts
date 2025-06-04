import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "demotecommunityparticipant",
  "toolDescription": "Demote participants to admin in community",
  "baseUrl": "https://gate.whapi.cloud/",
  "path": "/communities/{CommunityID}/admins",
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
      "CommunityID": "CommunityID"
    }
  },
  inputParamsSchema
}

export default tool