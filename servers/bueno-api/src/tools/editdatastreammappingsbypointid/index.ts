import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "editdatastreammappingsbypointid",
  "toolDescription": "Create / Update / Delete Data Stream Mappings by Point ID",
  "baseUrl": "https://api.example.com",
  "path": "/v2/points/{pointId}/data-stream-mappings",
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
      "pointId": "pointId"
    }
  },
  inputParamsSchema
}

export default tool