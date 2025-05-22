import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getpagelist_1",
  "toolDescription": "[查询]分页查询记录",
  "baseUrl": "http://localhost:2025",
  "path": "/v1/pre_order/page",
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
      "pageable": "pageable",
      "pageDTO": "pageDTO"
    }
  },
  inputParamsSchema
}

export default tool