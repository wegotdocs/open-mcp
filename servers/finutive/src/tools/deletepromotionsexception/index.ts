import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deletepromotionsexception",
  "toolDescription": "Delete promotion exception",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/promotions/exceptions/{exception_id}/delete",
  "method": "delete",
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
      "exception_id": "exception_id"
    }
  },
  inputParamsSchema
}

export default tool