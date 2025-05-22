import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "numbers_assign_number_post",
  "toolDescription": "Dialpad Number -- Assign",
  "baseUrl": "https://dialpad.com",
  "path": "/api/v2/numbers/{number}/assign",
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
      "number": "number"
    },
    "body": {
      "primary": "primary",
      "target_id": "target_id",
      "target_type": "target_type"
    }
  },
  inputParamsSchema
}

export default tool