import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_websites_id_",
  "toolDescription": "Create or update a website with predefined ID",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/websites/{id}",
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