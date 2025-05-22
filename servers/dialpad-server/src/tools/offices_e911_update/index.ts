import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "offices_e911_update",
  "toolDescription": "E911 Address -- Update",
  "baseUrl": "https://dialpad.com",
  "path": "/api/v2/offices/{id}/e911",
  "method": "put",
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
      "address": "address",
      "address2": "address2",
      "city": "city",
      "country": "country",
      "state": "state",
      "update_all": "update_all",
      "use_validated_option": "use_validated_option",
      "zip": "zip"
    }
  },
  inputParamsSchema
}

export default tool