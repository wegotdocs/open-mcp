import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_profile",
  "toolDescription": "Update user's profile",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/profile",
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
      "email": "email",
      "firstName": "firstName",
      "lastName": "lastName",
      "businessPhone": "businessPhone",
      "mobilePhone": "mobilePhone",
      "availableCurrencies": "availableCurrencies",
      "reportingCurrency": "reportingCurrency",
      "totpRequired": "totpRequired",
      "totpSecret": "totpSecret",
      "totpUrl": "totpUrl",
      "country": "country",
      "preferences": "preferences"
    }
  },
  inputParamsSchema
}

export default tool