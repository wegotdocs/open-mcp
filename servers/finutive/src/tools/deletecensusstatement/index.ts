import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deletecensusstatement",
  "toolDescription": "Delete census statement",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/admin/census_statements/{statement_id}",
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
      "statement_id": "statement_id"
    }
  },
  inputParamsSchema
}

export default tool