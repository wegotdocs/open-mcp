import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createsharedcommunicationchannelcomponent",
  "toolDescription": "Creates a SharedCommunicationChannelComponent object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/SharedCommunicationChannelComponent",
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
    "body": {
      "PartnerArchiving": "PartnerArchiving",
      "PartnerCommunication": "PartnerCommunication",
      "communicationType": "communicationType",
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