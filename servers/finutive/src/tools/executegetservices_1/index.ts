import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "executegetservices_1",
  "toolDescription": "Get services information",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/services/info",
  "method": "get",
  "security": [
    {
      "key": "wzu",
      "value": "<mcp-env-var>WZU</mcp-env-var>",
      "in": "cookie",
      "envVarName": "WZU"
    }
  ],
  "paramsMap": {
    "query": {
      "onboarding": "onboarding",
      "manager": "manager",
      "only_recommended": "only_recommended",
      "ratings": "ratings",
      "business_id": "business_id"
    }
  },
  inputParamsSchema
}

export default tool