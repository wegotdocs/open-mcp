import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "crm_v1_create_custom_field",
  "toolDescription": "Criar um campo personalizado",
  "baseUrl": "https://crm.rdstation.com/api/v1",
  "path": "/custom_fields",
  "method": "post",
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