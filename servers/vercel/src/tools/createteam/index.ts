import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createteam",
  "toolDescription": "Create a Team",
  "baseUrl": "https://api.vercel.com",
  "path": "/v1/teams",
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
      "slug": "slug",
      "name": "name",
      "attribution": "attribution"
    }
  },
  inputParamsSchema
}

export default tool