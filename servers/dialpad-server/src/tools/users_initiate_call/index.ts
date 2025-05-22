import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "users_initiate_call",
  "toolDescription": "Call -- Initiate",
  "baseUrl": "https://dialpad.com",
  "path": "/api/v2/users/{id}/initiate_call",
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
    "path": {
      "id": "id"
    },
    "body": {
      "custom_data": "custom_data",
      "group_id": "group_id",
      "group_type": "group_type",
      "outbound_caller_id": "outbound_caller_id",
      "phone_number": "phone_number"
    }
  },
  inputParamsSchema
}

export default tool