import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getmanagerlist",
  "toolDescription": "Get managers list",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/managers",
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
      "include_admins": "include_admins"
    }
  },
  inputParamsSchema
}

export default tool