import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "removesupportingrelationship",
  "toolDescription": "Removes a supporting goal relationship",
  "baseUrl": "https://app.asana.com/api/1.0",
  "path": "/goals/{goal_gid}/removeSupportingRelationship",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "body": {
      "data": "data"
    }
  },
  inputParamsSchema
}

export default tool