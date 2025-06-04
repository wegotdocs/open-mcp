import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateoffice",
  "toolDescription": "Update an office",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/core/v3/offices/{id}",
  "method": "put",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "name": "name",
      "address": "address",
      "coordinates": "coordinates",
      "description": "description",
      "radio": "radio"
    }
  },
  inputParamsSchema
}

export default tool