import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateaccessgroup",
  "toolDescription": "Update an access group",
  "baseUrl": "https://api.vercel.com",
  "path": "/v1/access-groups/{idOrName}",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "idOrName": "idOrName"
    },
    "query": {
      "teamId": "teamId",
      "slug": "slug"
    },
    "body": {
      "name": "name",
      "projects": "projects",
      "membersToAdd": "membersToAdd",
      "membersToRemove": "membersToRemove"
    }
  },
  inputParamsSchema
}

export default tool