import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getdeploymentevents",
  "toolDescription": "Get deployment events",
  "baseUrl": "https://api.vercel.com",
  "path": "/v3/deployments/{idOrUrl}/events",
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
      "direction": "direction",
      "follow": "follow",
      "limit": "limit",
      "name": "name",
      "since": "since",
      "until": "until",
      "statusCode": "statusCode",
      "delimiter": "delimiter",
      "builds": "builds",
      "teamId": "teamId",
      "slug": "slug"
    }
  },
  inputParamsSchema
}

export default tool