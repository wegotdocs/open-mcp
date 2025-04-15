import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_v9_projects_idorname_custom_environments",
  "toolDescription": "Retrieve custom environments",
  "baseUrl": "https://api.vercel.com",
  "path": "/v9/projects/{idOrName}/custom-environments",
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
      "gitBranch": "gitBranch",
      "teamId": "teamId",
      "slug": "slug"
    }
  },
  inputParamsSchema
}

export default tool