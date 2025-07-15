import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "crm_v1_create_activity",
  "toolDescription": "Criar anotação",
  "baseUrl": "https://crm.rdstation.com/api/v1",
  "path": "/activities",
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
      "activity": "activity"
    }
  },
  inputParamsSchema
}

export default tool