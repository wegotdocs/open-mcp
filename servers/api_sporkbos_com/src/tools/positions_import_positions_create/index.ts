import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "positions_import_positions_create",
  "toolDescription": "",
  "baseUrl": "https://api.sporkbos.com",
  "path": "/api/positions/import-positions/",
  "method": "post",
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
      "team": "team"
    },
    "body": {
      "file": "file",
      "delete_all_positions": "delete_all_positions"
    }
  },
  inputParamsSchema
}

export default tool