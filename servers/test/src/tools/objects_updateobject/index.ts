import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "objects_updateobject",
  "toolDescription": "ობიექტის განახლება",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/organization/{language}/{organizationId}/objects/update",
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
      "language": "language",
      "organizationId": "organizationId"
    },
    "body": {
      "id": "id",
      "name": "name",
      "address": "address",
      "driver_name": "driver_name",
      "driver_identification": "driver_identification",
      "car_number": "car_number"
    }
  },
  inputParamsSchema
}

export default tool