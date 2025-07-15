import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "crm_v1_update_campaign",
  "toolDescription": "Atualizar campanha",
  "baseUrl": "https://crm.rdstation.com/api/v1",
  "path": "/campaigns/{campaign_id}",
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
      "campaign": "campaign"
    }
  },
  inputParamsSchema
}

export default tool