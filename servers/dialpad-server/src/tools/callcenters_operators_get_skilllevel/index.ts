import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "callcenters_operators_get_skilllevel",
  "toolDescription": "Operator -- Get Skill Level",
  "baseUrl": "https://dialpad.com",
  "path": "/api/v2/callcenters/{call_center_id}/operators/{user_id}/skill",
  "method": "get",
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
      "call_center_id": "call_center_id",
      "user_id": "user_id"
    }
  },
  inputParamsSchema
}

export default tool