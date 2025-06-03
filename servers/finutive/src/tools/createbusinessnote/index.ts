import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createbusinessnote",
  "toolDescription": "Create business note",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/notes",
  "method": "post",
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
    "body": {
      "text": "text",
      "docs": "docs",
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool