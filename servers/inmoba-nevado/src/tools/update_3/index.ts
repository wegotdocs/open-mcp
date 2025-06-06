import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_3",
  "toolDescription": "Update one file by property",
  "baseUrl": "https://api-crm.inmobalia.com/v1",
  "path": "/v1/properties/{propertyId}/files/{fileId}",
  "method": "put",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "propertyId": "propertyId",
      "fileId": "fileId"
    },
    "body": {
      "name": "name",
      "lang": "lang",
      "type": "type",
      "publish": "publish",
      "visibleNetwork": "visibleNetwork",
      "excludePortals": "excludePortals",
      "description": "description"
    }
  },
  inputParamsSchema
}

export default tool