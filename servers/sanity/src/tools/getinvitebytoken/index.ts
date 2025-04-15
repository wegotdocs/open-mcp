import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getinvitebytoken",
  "toolDescription": "Get invite",
  "baseUrl": "https://api.sanity.io",
  "path": "/vX/access/{resourceType}/{resourceId}/invites/token/{inviteToken}",
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
      "resourceType": "resourceType",
      "resourceId": "resourceId",
      "inviteToken": "inviteToken"
    }
  },
  inputParamsSchema
}

export default tool