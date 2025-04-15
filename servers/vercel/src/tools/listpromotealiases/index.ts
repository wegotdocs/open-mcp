import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listpromotealiases",
  "toolDescription": "Gets a list of aliases with status for the current promote",
  "baseUrl": "https://api.vercel.com",
  "path": "/v1/projects/{projectId}/promote/aliases",
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
      "projectId": "projectId"
    },
    "query": {
      "limit": "limit",
      "since": "since",
      "until": "until",
      "failedOnly": "failedOnly",
      "teamId": "teamId",
      "slug": "slug"
    }
  },
  inputParamsSchema
}

export default tool