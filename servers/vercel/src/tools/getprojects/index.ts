import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getprojects",
  "toolDescription": "Retrieve a list of projects",
  "baseUrl": "https://api.vercel.com",
  "path": "/v10/projects",
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
      "from": "from",
      "gitForkProtection": "gitForkProtection",
      "limit": "limit",
      "search": "search",
      "repo": "repo",
      "repoId": "repoId",
      "repoUrl": "repoUrl",
      "excludeRepos": "excludeRepos",
      "edgeConfigId": "edgeConfigId",
      "edgeConfigTokenId": "edgeConfigTokenId",
      "deprecated": "deprecated",
      "teamId": "teamId",
      "slug": "slug"
    }
  },
  inputParamsSchema
}

export default tool