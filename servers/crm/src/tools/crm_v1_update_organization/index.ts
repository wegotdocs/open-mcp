import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "crm_v1_update_organization",
  "toolDescription": "Atualizar empresa",
  "baseUrl": "https://crm.rdstation.com/api/v1",
  "path": "/organizations/{organization_id}",
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
      "organization": "organization"
    }
  },
  inputParamsSchema
}

export default tool