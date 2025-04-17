import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "exportpoints",
  "toolDescription": "Export Points",
  "baseUrl": "https://api.example.com",
  "path": "/v2/organisations/{organisationId}/points/export",
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
    "query": {
      "siteIds": "siteIds",
      "includeDataStreamMappings": "includeDataStreamMappings"
    }
  },
  inputParamsSchema
}

export default tool