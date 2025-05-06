import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateentityability",
  "toolDescription": "Update an entity ability",
  "baseUrl": "https://api.kanka.io/1.0",
  "path": "/campaigns/{campaignId}/entities/{entityId}/entity_abilities/{abilityId}",
  "method": "put",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "ability_id": "ability_id",
      "charges": "charges",
      "note": "note",
      "position": "position",
      "visibility": "visibility"
    }
  },
  inputParamsSchema
}

export default tool