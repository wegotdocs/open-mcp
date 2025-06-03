import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatecontractstatus",
  "toolDescription": "Update contract status",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/contracts/status",
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
      "business_id": "business_id"
    },
    "query": {
      "request": "request"
    }
  },
  inputParamsSchema
}

export default tool