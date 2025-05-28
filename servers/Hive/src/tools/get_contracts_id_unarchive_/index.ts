import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_contracts_id_unarchive_",
  "toolDescription": "contracts unarchive",
  "baseUrl": "http://localhost:8000",
  "path": "/contracts/{id}/unarchive/",
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
    "path": {
      "id": "id"
    },
    "header": {
      "Accept": "Accept"
    }
  },
  inputParamsSchema
}

export default tool