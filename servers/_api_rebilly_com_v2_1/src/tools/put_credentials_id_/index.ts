import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_credentials_id_",
  "toolDescription": "Create or update a credential with predefined ID",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/credentials/{id}",
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
      "username": "username",
      "password": "password",
      "customerId": "customerId",
      "expiredTime": "expiredTime",
      "_links": "_links"
    }
  },
  inputParamsSchema
}

export default tool