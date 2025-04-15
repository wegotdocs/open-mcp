import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "requestaccesstoteam",
  "toolDescription": "Request access to a team",
  "baseUrl": "https://api.vercel.com",
  "path": "/v1/teams/{teamId}/request",
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
    "body": {
      "joinedFrom": "joinedFrom"
    }
  },
  inputParamsSchema
}

export default tool