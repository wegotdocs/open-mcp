import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "call_call",
  "toolDescription": "Call -- Initiate via Ring",
  "baseUrl": "https://dialpad.com",
  "path": "/api/v2/call",
  "method": "post",
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
    "body": {
      "custom_data": "custom_data",
      "device_id": "device_id",
      "group_id": "group_id",
      "group_type": "group_type",
      "is_consult": "is_consult",
      "outbound_caller_id": "outbound_caller_id",
      "phone_number": "phone_number",
      "user_id": "user_id"
    }
  },
  inputParamsSchema
}

export default tool