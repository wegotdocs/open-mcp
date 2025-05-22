import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "call_initiate_ivr_call",
  "toolDescription": "Call -- Initiate IVR Call",
  "baseUrl": "https://dialpad.com",
  "path": "/api/v2/call/initiate_ivr_call",
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
      "outbound_caller_id": "outbound_caller_id",
      "phone_number": "phone_number",
      "target_id": "target_id",
      "target_type": "target_type"
    }
  },
  inputParamsSchema
}

export default tool