import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_checkout_pages",
  "toolDescription": "Create a Checkout Page",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/checkout-pages",
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
      "planId": "planId",
      "websiteId": "websiteId",
      "uriPath": "uriPath",
      "name": "name",
      "isActive": "isActive",
      "redirectUrl": "redirectUrl",
      "redirectTimeout": "redirectTimeout",
      "allowCustomCustomerId": "allowCustomCustomerId",
      "_links": "_links"
    }
  },
  inputParamsSchema
}

export default tool