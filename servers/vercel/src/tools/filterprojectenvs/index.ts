import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "filterprojectenvs",
  "toolDescription": "Retrieve the environment variables of a project by id or name",
  "baseUrl": "https://api.vercel.com",
  "path": "/v10/projects/{idOrName}/env",
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
    "path": {
      "idOrName": "idOrName"
    },
    "query": {
      "gitBranch": "gitBranch",
      "decrypt": "decrypt",
      "source": "source",
      "customEnvironmentId": "customEnvironmentId",
      "customEnvironmentSlug": "customEnvironmentSlug",
      "teamId": "teamId",
      "slug": "slug"
    }
  },
  inputParamsSchema
}

export default tool