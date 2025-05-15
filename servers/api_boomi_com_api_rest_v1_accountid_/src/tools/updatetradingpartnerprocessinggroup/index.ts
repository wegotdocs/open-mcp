import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatetradingpartnerprocessinggroup",
  "toolDescription": "Modifies or updates a TradingPartnerProcessingGroup object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/TradingPartnerProcessingGroup/{id}",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "DefaultRouting": "DefaultRouting",
      "DocumentRouting": "DocumentRouting",
      "PartnerRouting": "PartnerRouting",
      "TradingPartners": "TradingPartners",
      "componentId": "componentId",
      "componentName": "componentName",
      "deleted": "deleted",
      "description": "description",
      "folderId": "folderId",
      "folderName": "folderName"
    }
  },
  inputParamsSchema
}

export default tool