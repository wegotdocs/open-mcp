import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_notes_get_notes_",
  "toolDescription": "Notes Filter",
  "baseUrl": "http://localhost:8000",
  "path": "/notes/get_notes/",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "sales_order": "sales_order"
    },
    "header": {
      "Content-Type": "Content-Type",
      "Accept": "Accept",
      "Authorization": "Authorization"
    }
  },
  inputParamsSchema
}

export default tool