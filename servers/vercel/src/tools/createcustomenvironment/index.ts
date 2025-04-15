import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createcustomenvironment",
  "toolDescription": "Create a custom environment for the current project.",
  "baseUrl": "https://api.vercel.com",
  "path": "/v9/projects/{idOrName}/custom-environments",
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
      "slug": "b_slug",
      "description": "description",
      "branchMatcher": "branchMatcher",
      "copyEnvVarsFrom": "copyEnvVarsFrom"
    }
  },
  inputParamsSchema
}

export default tool