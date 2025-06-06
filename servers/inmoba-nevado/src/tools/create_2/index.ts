import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_2",
  "toolDescription": "Add one link by property",
  "baseUrl": "https://api-crm.inmobalia.com/v1",
  "path": "/v1/properties/{propertyId}/links",
  "method": "post",
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
      "propertyId": "propertyId"
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