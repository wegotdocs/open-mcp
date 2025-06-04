import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "uploaddocument",
  "toolDescription": "Upload document",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/document/v1/directories/{directoryId}/documents",
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
      "directoryId": "directoryId"
    }
  },
  inputParamsSchema
}

export default tool