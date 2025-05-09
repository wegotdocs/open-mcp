import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "query_analytics",
  "toolDescription": "Query analytics, with optional grouping, windowing, filtering.",
  "baseUrl": "https://cloud.agenta.ai/v1",
  "path": "/observability/v1/analytics",
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
      "window": "window",
      "filtering": "filtering",
      "timeRange": "timeRange",
      "app_id": "app_id",
      "environment": "environment",
      "variant": "variant"
    }
  },
  inputParamsSchema
}

export default tool