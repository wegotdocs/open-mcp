import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "objects_index",
  "toolDescription": "ორგანიზაციის ობიექტები",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/organization/{locale}/{organizationId}/objects/list",
  "method": "get",
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
    "query": {
      "organization_id": "organization_id",
      "id": "id",
      "name": "name",
      "driver_name": "driver_name",
      "driver_identification": "driver_identification",
      "car_number": "car_number",
      "active": "active",
      "driver": "driver",
      "page_size": "page_size",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool