import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_users",
  "toolDescription": "Create an user",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/users",
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
      "email": "email",
      "firstName": "firstName",
      "lastName": "lastName",
      "businessPhone": "businessPhone",
      "mobilePhone": "mobilePhone",
      "password": "password",
      "permissions": "permissions",
      "createdTime": "createdTime",
      "updatedTime": "updatedTime",
      "loginTime": "loginTime",
      "reportingCurrency": "reportingCurrency",
      "availableCurrencies": "availableCurrencies",
      "totpRequired": "totpRequired",
      "totpSecret": "totpSecret",
      "totpUrl": "totpUrl",
      "status": "status",
      "country": "country",
      "preferences": "preferences",
      "_links": "_links"
    }
  },
  inputParamsSchema
}

export default tool