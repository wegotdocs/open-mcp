import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "retrievedatastreamsbyintegrationidlegacy",
  "toolDescription": "Retrieve Data Streams by Integration ID (Legacy)",
  "baseUrl": "https://api.example.com",
  "path": "/v2/integrations/{integrationId}/data-streams (deprecated)",
  "method": "get",
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
      "integrationId": "integrationId"
    },
    "query": {
      "sortBy": "sortBy",
      "sortDir": "sortDir",
      "streamId": "streamId",
      "limit": "limit",
      "offset": "offset",
      "includePointMappings": "includePointMappings"
    }
  },
  inputParamsSchema
}

export default tool