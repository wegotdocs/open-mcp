import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "ivr_details_update",
  "toolDescription": "Custom IVR -- Update",
  "baseUrl": "https://dialpad.com",
  "path": "/api/v2/customivrs/{ivr_id}",
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
      "ivr_id": "ivr_id"
    },
    "body": {
      "description": "description",
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool