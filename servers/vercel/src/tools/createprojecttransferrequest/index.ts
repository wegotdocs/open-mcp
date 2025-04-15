import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createprojecttransferrequest",
  "toolDescription": "Create project transfer request",
  "baseUrl": "https://api.vercel.com",
  "path": "/projects/{idOrName}/transfer-request",
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
      "callbackUrl": "callbackUrl",
      "callbackSecret": "callbackSecret"
    }
  },
  inputParamsSchema
}

export default tool