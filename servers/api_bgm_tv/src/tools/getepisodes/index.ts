import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getepisodes",
  "toolDescription": "Get Episodes",
  "baseUrl": "https://api.bgm.tv",
  "path": "/v0/episodes",
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
    "query": {
      "subject_id": "subject_id",
      "type": "type",
      "limit": "limit",
      "offset": "offset"
    }
  },
  inputParamsSchema
}

export default tool