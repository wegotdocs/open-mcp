import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getalias",
  "toolDescription": "Get an Alias",
  "baseUrl": "https://api.vercel.com",
  "path": "/v4/aliases/{idOrAlias}",
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
      "idOrAlias": "idOrAlias"
    },
    "query": {
      "from": "from",
      "projectId": "projectId",
      "since": "since",
      "until": "until",
      "teamId": "teamId",
      "slug": "slug"
    }
  },
  inputParamsSchema
}

export default tool