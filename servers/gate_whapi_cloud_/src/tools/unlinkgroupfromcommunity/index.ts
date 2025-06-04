import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "unlinkgroupfromcommunity",
  "toolDescription": "Unlink group from community",
  "baseUrl": "https://gate.whapi.cloud/",
  "path": "/communities/{CommunityID}/{GroupID}",
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
      "CommunityID": "CommunityID",
      "GroupID": "GroupID"
    }
  },
  inputParamsSchema
}

export default tool