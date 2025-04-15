import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "editprojectenv",
  "toolDescription": "Edit an environment variable",
  "baseUrl": "https://api.vercel.com",
  "path": "/v9/projects/{idOrName}/env/{id}",
  "method": "patch",
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
      "idOrName": "idOrName",
      "id": "id"
    },
    "query": {
      "teamId": "teamId",
      "slug": "slug"
    },
    "body": {
      "key": "key",
      "target": "target",
      "gitBranch": "gitBranch",
      "type": "type",
      "value": "value",
      "customEnvironmentIds": "customEnvironmentIds",
      "comment": "comment"
    }
  },
  inputParamsSchema
}

export default tool