import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "crm_v1_list_custom_fields",
  "toolDescription": "Listar campos personalizados",
  "baseUrl": "https://crm.rdstation.com/api/v1",
  "path": "/custom_fields",
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
      "for": "for"
    }
  },
  inputParamsSchema
}

export default tool