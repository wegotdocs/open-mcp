import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "serviceorganization_createserviceorganization",
  "toolDescription": "სერვის ორგანიზაციის დამატება",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/service-organization/{language}/create-service-organization",
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
      "language": "language"
    },
    "body": {
      "organization_id": "organization_id"
    }
  },
  inputParamsSchema
}

export default tool