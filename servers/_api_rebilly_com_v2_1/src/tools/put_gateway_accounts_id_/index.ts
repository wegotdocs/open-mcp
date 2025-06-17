import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_gateway_accounts_id_",
  "toolDescription": "Create or update a Gateway Account with predefined ID",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/gateway-accounts/{id}",
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
      "status": "status",
      "gatewayName": "gatewayName",
      "acquirerName": "acquirerName",
      "merchantCategoryCode": "merchantCategoryCode",
      "dccMarkup": "dccMarkup",
      "descriptor": "descriptor",
      "cityField": "cityField",
      "organizationId": "organizationId",
      "websites": "websites",
      "excludedDccQuoteCurrencies": "excludedDccQuoteCurrencies",
      "monthlyLimit": "monthlyLimit",
      "threeDSecure": "threeDSecure",
      "dynamicDescriptor": "dynamicDescriptor",
      "acceptedCurrencies": "acceptedCurrencies",
      "method": "method",
      "paymentCardSchemes": "paymentCardSchemes",
      "downtimeStart": "downtimeStart",
      "downtimeEnd": "downtimeEnd",
      "createdTime": "createdTime",
      "updatedTime": "updatedTime",
      "_links": "_links"
    }
  },
  inputParamsSchema
}

export default tool