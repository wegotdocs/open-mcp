import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getdeployments",
  "toolDescription": "List deployments",
  "baseUrl": "https://api.vercel.com",
  "path": "/v6/deployments",
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
      "app": "app",
      "from": "from",
      "limit": "limit",
      "projectId": "projectId",
      "target": "target",
      "to": "to",
      "users": "users",
      "since": "since",
      "until": "until",
      "state": "state",
      "rollbackCandidate": "rollbackCandidate",
      "branch": "branch",
      "sha": "sha",
      "teamId": "teamId",
      "slug": "slug"
    }
  },
  inputParamsSchema
}

export default tool