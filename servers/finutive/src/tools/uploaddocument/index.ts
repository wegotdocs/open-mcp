import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "uploaddocument",
  "toolDescription": "upload document",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/documents/upload",
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
    "query": {
      "request": "request"
    }
  },
  inputParamsSchema
}

export default tool