import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "importstakeholderfromglobal",
  "toolDescription": "Import stakeholder from global repository",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{businessId}/stakeholders/global/{globalId}",
  "method": "post",
  "security": [
    {
      "key": "wzu",
      "value": "<mcp-env-var>WZU</mcp-env-var>",
      "in": "cookie",
      "envVarName": "WZU"
    }
  ],
  "paramsMap": {
    "path": {
      "globalId": "globalId",
      "businessId": "businessId"
    },
    "body": {
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool