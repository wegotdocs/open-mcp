import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listaccessgroups",
  "toolDescription": "List access groups for a team, project or member",
  "baseUrl": "https://api.vercel.com",
  "path": "/v1/access-groups",
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
      "projectId": "projectId",
      "search": "search",
      "membersLimit": "membersLimit",
      "projectsLimit": "projectsLimit",
      "limit": "limit",
      "next": "next",
      "teamId": "teamId",
      "slug": "slug"
    }
  },
  inputParamsSchema
}

export default tool