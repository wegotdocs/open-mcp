import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_1",
  "toolDescription": "Update one link by property",
  "baseUrl": "https://api-crm.inmobalia.com/v1",
  "path": "/v1/properties/{propertyId}/links/{linkId}",
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
      "linkId": "linkId"
    },
    "body": {
      "name": "name",
      "lang": "lang",
      "type": "type",
      "publish": "publish",
      "visibleNetwork": "visibleNetwork",
      "excludePortals": "excludePortals",
      "url": "url",
      "description": "description"
    }
  },
  inputParamsSchema
}

export default tool