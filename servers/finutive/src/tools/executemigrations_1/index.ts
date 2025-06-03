import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "executemigrations_1",
  "toolDescription": "",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/migrations/master-migrator/execute-all",
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
    "query": {
      "pageSize": "pageSize",
      "initialPage": "initialPage",
      "threads": "threads",
      "batch": "batch",
      "token": "token",
      "invoices": "invoices",
      "documents": "documents"
    }
  },
  inputParamsSchema
}

export default tool