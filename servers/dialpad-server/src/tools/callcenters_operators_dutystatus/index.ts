import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "callcenters_operators_dutystatus",
  "toolDescription": "Operator -- Update Duty Status",
  "baseUrl": "https://dialpad.com",
  "path": "/api/v2/callcenters/operators/{id}/dutystatus",
  "method": "patch",
  "security": [
    {
      "key": "apikey",
      "value": "<mcp-env-var>APIKEY</mcp-env-var>",
      "in": "query",
      "envVarName": "APIKEY"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "duty_status_reason": "duty_status_reason",
      "on_duty": "on_duty"
    }
  },
  inputParamsSchema
}

export default tool