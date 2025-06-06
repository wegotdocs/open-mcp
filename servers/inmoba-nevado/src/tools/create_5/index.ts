import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_5",
  "toolDescription": "Add a description by property",
  "baseUrl": "https://api-crm.inmobalia.com/v1",
  "path": "/v1/properties/{propertyId}/descriptions/{language}",
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
      "propertyId": "propertyId",
      "language": "language"
    },
    "body": {
      "shortDesc": "shortDesc",
      "mainDesc": "mainDesc",
      "extraDesc": "extraDesc",
      "priceDesc": "priceDesc"
    }
  },
  inputParamsSchema
}

export default tool