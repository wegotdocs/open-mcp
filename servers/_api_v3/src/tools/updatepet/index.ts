import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatepet",
  "toolDescription": "Update an existing pet.",
  "baseUrl": "/api/v3",
  "path": "/pet",
  "method": "put",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "body": {
      "id": "id",
      "name": "name",
      "category": "category",
      "photoUrls": "photoUrls",
      "tags": "tags",
      "status": "status"
    }
  },
  inputParamsSchema
}

export default tool