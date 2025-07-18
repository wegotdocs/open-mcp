import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deletebyexternalid",
  "toolDescription": "Delete Data By External Id",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/admin/data/{externalId}/external",
  "method": "delete",
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
      "externalId": "externalId"
    }
  },
  inputParamsSchema
}

export default tool