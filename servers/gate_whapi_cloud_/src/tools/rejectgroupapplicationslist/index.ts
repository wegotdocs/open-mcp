import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "rejectgroupapplicationslist",
  "toolDescription": "Reject group applications for listed users",
  "baseUrl": "https://gate.whapi.cloud/",
  "path": "/groups/{GroupID}/applications",
  "method": "delete",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    },
    {
      "key": "token",
      "value": "<mcp-env-var>TOKEN</mcp-env-var>",
      "in": "query",
      "envVarName": "TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "GroupID": "GroupID"
    },
    "body": {
      "application": "application"
    }
  },
  inputParamsSchema
}

export default tool