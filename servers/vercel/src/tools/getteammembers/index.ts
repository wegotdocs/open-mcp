import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getteammembers",
  "toolDescription": "List team members",
  "baseUrl": "https://api.vercel.com",
  "path": "/v3/teams/{teamId}/members",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "limit": "limit",
      "since": "since",
      "until": "until",
      "search": "search",
      "role": "role",
      "excludeProject": "excludeProject",
      "eligibleMembersForProjectId": "eligibleMembersForProjectId"
    }
  },
  inputParamsSchema
}

export default tool