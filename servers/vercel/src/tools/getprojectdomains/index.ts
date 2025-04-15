import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getprojectdomains",
  "toolDescription": "Retrieve project domains by project by id or name",
  "baseUrl": "https://api.vercel.com",
  "path": "/v9/projects/{idOrName}/domains",
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
      "idOrName": "idOrName"
    },
    "query": {
      "production": "production",
      "target": "target",
      "customEnvironmentId": "customEnvironmentId",
      "gitBranch": "gitBranch",
      "redirects": "redirects",
      "redirect": "redirect",
      "verified": "verified",
      "limit": "limit",
      "since": "since",
      "until": "until",
      "order": "order",
      "teamId": "teamId",
      "slug": "slug"
    }
  },
  inputParamsSchema
}

export default tool