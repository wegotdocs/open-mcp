import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "assignalias",
  "toolDescription": "Assign an Alias",
  "baseUrl": "https://api.vercel.com",
  "path": "/v2/deployments/{id}/aliases",
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
    "path": {
      "id": "id"
    },
    "query": {
      "teamId": "teamId",
      "slug": "slug"
    },
    "body": {
      "alias": "alias",
      "redirect": "redirect"
    }
  },
  inputParamsSchema
}

export default tool