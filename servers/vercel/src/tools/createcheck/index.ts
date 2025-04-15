import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createcheck",
  "toolDescription": "Creates a new Check",
  "baseUrl": "https://api.vercel.com",
  "path": "/v1/deployments/{deploymentId}/checks",
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
      "deploymentId": "deploymentId"
    },
    "query": {
      "teamId": "teamId",
      "slug": "slug"
    },
    "body": {
      "name": "name",
      "path": "path",
      "blocking": "blocking",
      "detailsUrl": "detailsUrl",
      "externalId": "externalId",
      "rerequestable": "rerequestable"
    }
  },
  inputParamsSchema
}

export default tool