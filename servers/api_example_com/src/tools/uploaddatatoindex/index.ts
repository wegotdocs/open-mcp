import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "uploaddatatoindex",
  "toolDescription": "Uploads a single document to the system and launch indexer process",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/admin/data/index",
  "method": "post",
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
      "File": "File",
      "UseCaseId": "UseCaseId",
      "Comments": "Comments"
    }
  },
  inputParamsSchema
}

export default tool