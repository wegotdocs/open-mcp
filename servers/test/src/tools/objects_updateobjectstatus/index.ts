import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "objects_updateobjectstatus",
  "toolDescription": "ობიექტის აქტიური სტატუსის შეცვლა",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/organization/{locale}/{organizationId}/objects/update-status",
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
      "locale": "locale",
      "organizationId": "organizationId"
    },
    "body": {
      "id": "id",
      "is_active": "is_active"
    }
  },
  inputParamsSchema
}

export default tool