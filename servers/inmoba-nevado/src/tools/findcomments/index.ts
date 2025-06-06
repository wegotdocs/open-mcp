import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "findcomments",
  "toolDescription": "Find comments by activity ID",
  "baseUrl": "https://api-crm.inmobalia.com/v1",
  "path": "/v1/activities/{activityId}/comments",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "activityId": "activityId"
    }
  },
  inputParamsSchema
}

export default tool