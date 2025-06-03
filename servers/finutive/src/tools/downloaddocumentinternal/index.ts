import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "downloaddocumentinternal",
  "toolDescription": "Download internal document",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/documents/{document_id}/download",
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
      "business_id": "business_id",
      "document_id": "document_id"
    },
    "query": {
      "inline": "inline"
    }
  },
  inputParamsSchema
}

export default tool