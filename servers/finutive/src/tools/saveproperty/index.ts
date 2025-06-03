import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "saveproperty",
  "toolDescription": "Save instance property",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/instance/properties",
  "method": "post",
  "security": [
    {
      "key": "wzu",
      "value": "<mcp-env-var>WZU</mcp-env-var>",
      "in": "cookie",
      "envVarName": "WZU"
    }
  ],
  "paramsMap": {
    "body": {
      "property_name": "property_name",
      "property_value": "property_value"
    }
  },
  inputParamsSchema
}

export default tool