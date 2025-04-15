import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addprojectmember",
  "toolDescription": "Adds a new member to a project.",
  "baseUrl": "https://api.vercel.com",
  "path": "/v1/projects/{idOrName}/members",
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
      "uid": "uid",
      "username": "username",
      "email": "email",
      "role": "role"
    }
  },
  inputParamsSchema
}

export default tool