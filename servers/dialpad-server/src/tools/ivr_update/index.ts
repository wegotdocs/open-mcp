import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "ivr_update",
  "toolDescription": "Custom IVR -- Assign",
  "baseUrl": "https://dialpad.com",
  "path": "/api/v2/customivrs/{target_type}/{target_id}/{ivr_type}",
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
      "target_type": "target_type",
      "target_id": "target_id",
      "ivr_type": "ivr_type"
    },
    "body": {
      "ivr_id": "ivr_id",
      "select_option": "select_option"
    }
  },
  inputParamsSchema
}

export default tool