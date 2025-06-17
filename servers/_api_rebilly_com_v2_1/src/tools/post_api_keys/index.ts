import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_api_keys",
  "toolDescription": "Create an api key",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/api-keys",
  "method": "post",
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