import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_api_keys_id_",
  "toolDescription": "Create or update api key with predefined ID",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/api-keys/{id}",
  "method": "put",
  "security": [
    {
      "key": "REB-APIKEY",
      "value": "<mcp-env-var>REB_APIKEY</mcp-env-var>",
      "in": "header",
      "envVarName": "REB_APIKEY"
    }
  ],
  "paramsMap": {
    "body": {
      "id": "id",
      "description": "description",
      "datetimeFormat": "datetimeFormat",
      "apiUser": "apiUser",
      "secretKey": "secretKey",
      "createdTime": "createdTime",
      "_links": "_links"
    }
  },
  inputParamsSchema
}

export default tool