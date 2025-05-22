import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "callcenters_operators_post",
  "toolDescription": "Operator -- Add",
  "baseUrl": "https://dialpad.com",
  "path": "/api/v2/callcenters/{id}/operators",
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
      "keep_paid_numbers": "keep_paid_numbers",
      "license_type": "license_type",
      "role": "role",
      "skill_level": "skill_level",
      "user_id": "user_id"
    }
  },
  inputParamsSchema
}

export default tool