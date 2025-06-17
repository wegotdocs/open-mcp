import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_websites",
  "toolDescription": "Create a website",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/websites",
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
      "name": "name",
      "url": "url",
      "servicePhone": "servicePhone",
      "serviceEmail": "serviceEmail",
      "checkoutPageUri": "checkoutPageUri",
      "createdTime": "createdTime",
      "updatedTime": "updatedTime",
      "customFields": "customFields",
      "_links": "_links"
    }
  },
  inputParamsSchema
}

export default tool