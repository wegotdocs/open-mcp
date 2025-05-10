import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getsubjects",
  "toolDescription": "浏览条目",
  "baseUrl": "https://api.bgm.tv",
  "path": "/v0/subjects",
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
      "type": "type",
      "cat": "cat",
      "series": "series",
      "platform": "platform",
      "sort": "sort",
      "year": "year",
      "month": "month",
      "limit": "limit",
      "offset": "offset"
    }
  },
  inputParamsSchema
}

export default tool