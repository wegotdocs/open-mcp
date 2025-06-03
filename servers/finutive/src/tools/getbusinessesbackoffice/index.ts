import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getbusinessesbackoffice",
  "toolDescription": "Get businesses for backoffice",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/businesses",
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
    "query": {
      "size": "size",
      "offset": "offset",
      "search": "search"
    }
  },
  inputParamsSchema
}

export default tool