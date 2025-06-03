import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getmanagerbusinesses",
  "toolDescription": "Get manager businesses",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/managers/{managerId}/businesses",
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
      "managerId": "managerId"
    }
  },
  inputParamsSchema
}

export default tool