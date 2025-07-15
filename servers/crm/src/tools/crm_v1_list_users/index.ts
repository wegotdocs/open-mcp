import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "crm_v1_list_users",
  "toolDescription": "Listar usuários",
  "baseUrl": "https://crm.rdstation.com/api/v1",
  "path": "/users",
  "method": "get",
  "security": [
    {
      "key": "token",
      "value": "<mcp-env-var>TOKEN</mcp-env-var>",
      "in": "query",
      "envVarName": "TOKEN"
    }
  ],
  "paramsMap": {
    "query": {
      "active": "active"
    }
  },
  inputParamsSchema
}

export default tool