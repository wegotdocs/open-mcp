import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deleteaccessgroupproject",
  "toolDescription": "Delete an access group project",
  "baseUrl": "https://api.vercel.com",
  "path": "/v1/access-groups/{accessGroupIdOrName}/projects/{projectId}",
  "method": "delete",
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
      "accessGroupIdOrName": "accessGroupIdOrName",
      "projectId": "projectId"
    },
    "query": {
      "teamId": "teamId",
      "slug": "slug"
    }
  },
  inputParamsSchema
}

export default tool