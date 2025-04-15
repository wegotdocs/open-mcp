import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "renamesecret",
  "toolDescription": "Change secret name",
  "baseUrl": "https://api.vercel.com",
  "path": "/v2/secrets/{name}",
  "method": "patch",
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
      "name": "name"
    },
    "query": {
      "teamId": "teamId",
      "slug": "slug"
    },
    "body": {
      "name": "b_name"
    }
  },
  inputParamsSchema
}

export default tool