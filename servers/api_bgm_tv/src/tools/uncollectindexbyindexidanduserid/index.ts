import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "uncollectindexbyindexidanduserid",
  "toolDescription": "Uncollect index for current user",
  "baseUrl": "https://api.bgm.tv",
  "path": "/v0/indices/{index_id}/collect",
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
      "index_id": "index_id"
    }
  },
  inputParamsSchema
}

export default tool