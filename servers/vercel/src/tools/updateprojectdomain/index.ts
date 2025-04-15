import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateprojectdomain",
  "toolDescription": "Update a project domain",
  "baseUrl": "https://api.vercel.com",
  "path": "/v9/projects/{idOrName}/domains/{domain}",
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
      "idOrName": "idOrName",
      "domain": "domain"
    },
    "query": {
      "teamId": "teamId",
      "slug": "slug"
    },
    "body": {
      "gitBranch": "gitBranch",
      "redirect": "redirect",
      "redirectStatusCode": "redirectStatusCode"
    }
  },
  inputParamsSchema
}

export default tool