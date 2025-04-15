import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatecheck",
  "toolDescription": "Update a check",
  "baseUrl": "https://api.vercel.com",
  "path": "/v1/deployments/{deploymentId}/checks/{checkId}",
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
      "deploymentId": "deploymentId",
      "checkId": "checkId"
    },
    "query": {
      "teamId": "teamId",
      "slug": "slug"
    },
    "body": {
      "name": "name",
      "path": "path",
      "status": "status",
      "conclusion": "conclusion",
      "detailsUrl": "detailsUrl",
      "output": "output",
      "externalId": "externalId"
    }
  },
  inputParamsSchema
}

export default tool