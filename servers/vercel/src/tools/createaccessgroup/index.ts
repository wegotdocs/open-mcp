import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createaccessgroup",
  "toolDescription": "Creates an access group",
  "baseUrl": "https://api.vercel.com",
  "path": "/v1/access-groups",
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
    "query": {
      "teamId": "teamId",
      "slug": "slug"
    },
    "body": {
      "name": "name",
      "projects": "projects",
      "membersToAdd": "membersToAdd"
    }
  },
  inputParamsSchema
}

export default tool