import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_layouts",
  "toolDescription": "Create a layout",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/layouts",
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
      "items": "items",
      "createdTime": "createdTime",
      "customFields": "customFields",
      "_links": "_links"
    }
  },
  inputParamsSchema
}

export default tool