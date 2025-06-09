import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "objects_createobject",
  "toolDescription": "ობიექტის დამატება",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/organization/{locale}/{organizationId}/objects/create",
  "method": "post",
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
      "locale": "locale",
      "organizationId": "organizationId"
    },
    "body": {
      "name": "name",
      "address": "address",
      "sale_object": "sale_object",
      "purchase_object": "purchase_object",
      "active": "active",
      "driver_name": "driver_name",
      "driver_identification": "driver_identification",
      "car_number": "car_number"
    }
  },
  inputParamsSchema
}

export default tool