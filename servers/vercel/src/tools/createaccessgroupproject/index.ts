import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createaccessgroupproject",
  "toolDescription": "Create an access group project",
  "baseUrl": "https://api.vercel.com",
  "path": "/v1/access-groups/{accessGroupIdOrName}/projects",
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
      "accessGroupIdOrName": "accessGroupIdOrName"
    },
    "query": {
      "teamId": "teamId",
      "slug": "slug"
    },
    "body": {
      "projectId": "projectId",
      "role": "role"
    }
  },
  inputParamsSchema
}

export default tool