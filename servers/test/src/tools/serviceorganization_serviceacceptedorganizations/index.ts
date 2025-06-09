import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "serviceorganization_serviceacceptedorganizations",
  "toolDescription": "დადასტურებული ორგანიზაციები",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/service-organization/{language}/accepted-service-organization",
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
      "id": "id",
      "organization_id": "organization_id",
      "identification": "identification"
    }
  },
  inputParamsSchema
}

export default tool