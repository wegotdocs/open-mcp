import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "putmanagercosthour",
  "toolDescription": "Put manager cost-hour",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/managers/{managerId}/cost-hour",
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
      "cost_hour": "cost_hour"
    }
  },
  inputParamsSchema
}

export default tool