import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deletedocument",
  "toolDescription": "delete document",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/document/v1/documents/{documentId}",
  "method": "delete",
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
      "documentId": "documentId"
    }
  },
  inputParamsSchema
}

export default tool