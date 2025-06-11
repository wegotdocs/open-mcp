import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "move",
  "toolDescription": "Move knowledge base items",
  "baseUrl": "https://app.ninjarmm.com/v2/",
  "path": "/v2/knowledgebase/folders/move",
  "method": "patch",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    },
    {
      "key": "sessionKey",
      "value": "<mcp-env-var>SESSIONKEY</mcp-env-var>",
      "in": "cookie",
      "envVarName": "SESSIONKEY"
    }
  ],
  "paramsMap": {
    "body": {
      "folderIds": "folderIds",
      "documentIds": "documentIds",
      "destinationFolderId": "destinationFolderId",
      "destinationOrganizationId": "destinationOrganizationId"
    }
  },
  inputParamsSchema
}

export default tool