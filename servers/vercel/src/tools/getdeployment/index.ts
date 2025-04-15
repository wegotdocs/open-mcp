import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getdeployment",
  "toolDescription": "Get a deployment by ID or URL",
  "baseUrl": "https://api.vercel.com",
  "path": "/v13/deployments/{idOrUrl}",
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
      "idOrUrl": "idOrUrl"
    },
    "query": {
      "withGitRepoInfo": "withGitRepoInfo",
      "teamId": "teamId",
      "slug": "slug"
    }
  },
  inputParamsSchema
}

export default tool