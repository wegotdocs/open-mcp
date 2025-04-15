import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "removecustomenvironment",
  "toolDescription": "Remove a custom environment",
  "baseUrl": "https://api.vercel.com",
  "path": "/v9/projects/{idOrName}/custom-environments/{environmentSlugOrId}",
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
      "environmentSlugOrId": "environmentSlugOrId"
    },
    "query": {
      "teamId": "teamId",
      "slug": "slug"
    },
    "body": {
      "deleteUnassignedEnvironmentVariables": "deleteUnassignedEnvironmentVariables"
    }
  },
  inputParamsSchema
}

export default tool