import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addprojectdomain",
  "toolDescription": "Add a domain to a project",
  "baseUrl": "https://api.vercel.com",
  "path": "/v10/projects/{idOrName}/domains",
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
      "idOrName": "idOrName"
    },
    "query": {
      "teamId": "teamId",
      "slug": "slug"
    },
    "body": {
      "name": "name",
      "gitBranch": "gitBranch",
      "customEnvironmentId": "customEnvironmentId",
      "redirect": "redirect",
      "redirectStatusCode": "redirectStatusCode"
    }
  },
  inputParamsSchema
}

export default tool