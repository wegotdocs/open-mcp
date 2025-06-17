import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_customers_id_",
  "toolDescription": "Create a customer with predefined ID",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/customers/{id}",
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
      "defaultPaymentInstrument": "defaultPaymentInstrument",
      "createdTime": "createdTime",
      "updatedTime": "updatedTime",
      "customFields": "customFields",
      "primaryAddress": "primaryAddress",
      "_links": "_links"
    }
  },
  inputParamsSchema
}

export default tool