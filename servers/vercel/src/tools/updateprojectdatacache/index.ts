import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateprojectdatacache",
  "toolDescription": "Update the data cache feature",
  "baseUrl": "https://api.vercel.com",
  "path": "/v1/data-cache/projects/{projectId}",
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
      "projectId": "projectId"
    },
    "query": {
      "teamId": "teamId",
      "slug": "slug"
    },
    "body": {
      "disabled": "disabled"
    }
  },
  inputParamsSchema
}

export default tool