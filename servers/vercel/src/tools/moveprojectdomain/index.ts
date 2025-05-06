import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "moveprojectdomain",
  "toolDescription": "Move a project domain",
  "baseUrl": "https://api.vercel.com",
  "path": "/v1/projects/{idOrName}/domains/{domain}/move",
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
      "idOrName": "idOrName",
      "domain": "domain"
    },
    "query": {
      "teamId": "teamId",
      "slug": "slug"
    },
    "body": {
      "projectId": "projectId"
    }
  },
  inputParamsSchema
}

export default tool