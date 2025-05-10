import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "retrieveoccurrencesforequipment",
  "toolDescription": "Retrieve Occurrences by Equipment ID",
  "baseUrl": "https://api.example.com",
  "path": "/v2/equips/{equipId}/occurrences (deprecated)",
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
      "equipId": "equipId"
    },
    "query": {
      "from": "from",
      "to": "to",
      "ruleIds": "ruleIds"
    }
  },
  inputParamsSchema
}

export default tool