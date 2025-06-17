import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_custom_fields_resource_name_",
  "toolDescription": "Create or alter a Custom Field",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/custom-fields/{resource}/{name}",
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
      "name": "name",
      "type": "type",
      "description": "description",
      "isUsed": "isUsed",
      "additionalSchema": "additionalSchema",
      "_links": "_links"
    }
  },
  inputParamsSchema
}

export default tool