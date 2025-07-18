import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "uploaddata",
  "toolDescription": "Uploads a single document to the system.",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/admin/data",
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