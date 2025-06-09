import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "organizations_index",
  "toolDescription": "ორგანიზაციები",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/organization/{language}/list",
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
      "language": "language"
    },
    "query": {
      "service_organizations": "service_organizations",
      "id": "id",
      "type": "type",
      "name": "name",
      "email": "email",
      "telephone": "telephone",
      "brand_name": "brand_name",
      "identification": "identification",
      "page_size": "page_size",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool