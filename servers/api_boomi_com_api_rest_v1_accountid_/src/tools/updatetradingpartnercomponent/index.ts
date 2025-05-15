import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatetradingpartnercomponent",
  "toolDescription": "Modifies or updates a TradingPartnerComponent object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/TradingPartnerComponent/{id}",
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
      "ContactInfo": "ContactInfo",
      "PartnerCommunication": "PartnerCommunication",
      "PartnerCommunicationTypes": "PartnerCommunicationTypes",
      "PartnerDocumentTypes": "PartnerDocumentTypes",
      "PartnerInfo": "PartnerInfo",
      "classification": "classification",
      "componentId": "componentId",
      "componentName": "componentName",
      "deleted": "deleted",
      "description": "description",
      "folderId": "folderId",
      "folderName": "folderName",
      "identifier": "identifier",
      "organizationId": "organizationId",
      "standard": "standard"
    }
  },
  inputParamsSchema
}

export default tool