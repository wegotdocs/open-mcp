import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "crm_v1_delete_webhook",
  "toolDescription": "Deletar Webhook",
  "baseUrl": "https://crm.rdstation.com/api/v1",
  "path": "/webhooks/{uuid}",
  "method": "delete",
  "security": [
    {
      "key": "token",
      "value": "<mcp-env-var>TOKEN</mcp-env-var>",
      "in": "query",
      "envVarName": "TOKEN"
    }
  ],
  "paramsMap": {},
  inputParamsSchema
}

export default tool