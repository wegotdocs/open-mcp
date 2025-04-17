import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deletedatastreambyid",
  "toolDescription": "Delete Data Stream",
  "baseUrl": "https://api.example.com",
  "path": "/v2/data-streams/{dataStreamId}",
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
      "dataStreamId": "dataStreamId"
    }
  },
  inputParamsSchema
}

export default tool