import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getproperty",
  "toolDescription": "Get instance property",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/instance/properties/{propertyName}",
  "method": "get",
  "security": [
    {
      "key": "wzu",
      "value": "<mcp-env-var>WZU</mcp-env-var>",
      "in": "cookie",
      "envVarName": "WZU"
    }
  ],
  "paramsMap": {
    "path": {
      "propertyName": "propertyName"
    }
  },
  inputParamsSchema
}

export default tool