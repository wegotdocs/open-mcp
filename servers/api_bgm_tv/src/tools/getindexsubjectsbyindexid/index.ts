import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getindexsubjectsbyindexid",
  "toolDescription": "Get Index Subjects",
  "baseUrl": "https://api.bgm.tv",
  "path": "/v0/indices/{index_id}/subjects",
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
      "index_id": "index_id"
    },
    "query": {
      "type": "type",
      "limit": "limit",
      "offset": "offset"
    }
  },
  inputParamsSchema
}

export default tool