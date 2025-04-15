import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "acceptprojecttransferrequest",
  "toolDescription": "Accept project transfer request",
  "baseUrl": "https://api.vercel.com",
  "path": "/projects/transfer-request/{code}",
  "method": "put",
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
      "code": "code"
    },
    "query": {
      "teamId": "teamId",
      "slug": "slug"
    },
    "body": {
      "newProjectName": "newProjectName",
      "paidFeatures": "paidFeatures"
    }
  },
  inputParamsSchema
}

export default tool