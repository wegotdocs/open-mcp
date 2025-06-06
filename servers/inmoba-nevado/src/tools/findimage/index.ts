import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "findimage",
  "toolDescription": "Finds an image from a property",
  "baseUrl": "https://api-crm.inmobalia.com/v1",
  "path": "/v1/properties/{propertyId}/images/{imageId}",
  "method": "get",
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
    }
  },
  inputParamsSchema
}

export default tool