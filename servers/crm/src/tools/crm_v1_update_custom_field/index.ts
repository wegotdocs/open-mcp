import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "crm_v1_update_custom_field",
  "toolDescription": "Atualizar um campo personalizado",
  "baseUrl": "https://crm.rdstation.com/api/v1",
  "path": "/custom_fields/{custom_field_id}",
  "method": "put",
  "security": [
    {
      "key": "token",
      "value": "<mcp-env-var>TOKEN</mcp-env-var>",
      "in": "query",
      "envVarName": "TOKEN"
    }
  ],
  "paramsMap": {
    "body": {
      "custom_field": "custom_field"
    }
  },
  inputParamsSchema
}

export default tool