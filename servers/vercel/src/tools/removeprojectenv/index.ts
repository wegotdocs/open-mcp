import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "removeprojectenv",
  "toolDescription": "Remove an environment variable",
  "baseUrl": "https://api.vercel.com",
  "path": "/v9/projects/{idOrName}/env/{id}",
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
      "idOrName": "idOrName",
      "id": "id"
    },
    "query": {
      "customEnvironmentId": "customEnvironmentId",
      "teamId": "teamId",
      "slug": "slug"
    }
  },
  inputParamsSchema
}

export default tool