import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getmanagersinfo",
  "toolDescription": "Get managers info",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/managers/info",
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
      "search": "search",
      "role": "role",
      "select_all": "select_all",
      "offset": "offset",
      "size": "size",
      "sort_field": "sort_field",
      "sort_dir": "sort_dir"
    }
  },
  inputParamsSchema
}

export default tool