import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_2",
  "toolDescription": "Update one image by property",
  "baseUrl": "https://api-crm.inmobalia.com/v1",
  "path": "/v1/properties/{propertyId}/images/{imageId}",
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
      "imageId": "imageId"
    },
    "body": {
      "publish": "publish",
      "main": "main",
      "position": "position"
    }
  },
  inputParamsSchema
}

export default tool