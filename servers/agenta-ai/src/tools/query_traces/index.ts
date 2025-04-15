import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "query_traces",
  "toolDescription": "Query traces, with optional grouping, windowing, filtering, and pagination.",
  "baseUrl": "https://cloud.agenta.ai/api",
  "path": "/observability/v1/traces",
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
    "query": {
      "format": "format",
      "focus": "focus",
      "oldest": "oldest",
      "newest": "newest",
      "filtering": "filtering",
      "page": "page",
      "size": "size",
      "next": "next",
      "stop": "stop"
    }
  },
  inputParamsSchema
}

export default tool