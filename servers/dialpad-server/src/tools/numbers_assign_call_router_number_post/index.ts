import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "numbers_assign_call_router_number_post",
  "toolDescription": "Dialpad Number -- Assign",
  "baseUrl": "https://dialpad.com",
  "path": "/api/v2/callrouters/{id}/assign_number",
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
      "area_code": "area_code",
      "number": "number",
      "primary": "primary"
    }
  },
  inputParamsSchema
}

export default tool