import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "assignmanagertobusinesses",
  "toolDescription": "Assign manager business",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/managers/{managerId}/businesses",
  "method": "put",
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
    },
    "body": {
      "businesses_ids": "businesses_ids"
    }
  },
  inputParamsSchema
}

export default tool