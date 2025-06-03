import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getlistclient",
  "toolDescription": "Get list of stakeholders",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{businessId}/stakeholders",
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
      "businessId": "businessId"
    },
    "query": {
      "text": "text",
      "type": "type",
      "cif": "cif",
      "size": "size",
      "offset": "offset",
      "searchInGlobal": "searchInGlobal"
    }
  },
  inputParamsSchema
}

export default tool