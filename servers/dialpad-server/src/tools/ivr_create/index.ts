import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "ivr_create",
  "toolDescription": "Custom IVR -- Create",
  "baseUrl": "https://dialpad.com",
  "path": "/api/v2/customivrs",
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
      "description": "description",
      "file": "file",
      "ivr_type": "ivr_type",
      "name": "name",
      "target_id": "target_id",
      "target_type": "target_type"
    }
  },
  inputParamsSchema
}

export default tool