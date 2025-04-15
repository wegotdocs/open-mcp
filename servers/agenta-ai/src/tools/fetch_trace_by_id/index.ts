import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "fetch_trace_by_id",
  "toolDescription": "Fetch trace by ID.",
  "baseUrl": "https://cloud.agenta.ai/api",
  "path": "/observability/v1/traces/{trace_id}",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "path": {
      "trace_id": "trace_id"
    },
    "query": {
      "format": "format"
    }
  },
  inputParamsSchema
}

export default tool