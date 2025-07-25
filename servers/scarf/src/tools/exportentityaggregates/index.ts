import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "exportentityaggregates",
  "toolDescription": "Export aggregates",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/packages/{owner}/aggregates",
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
      "owner": "owner"
    },
    "query": {
      "start_date": "start_date",
      "end_date": "end_date",
      "query": "query",
      "rollup": "rollup",
      "breakdown": "breakdown",
      "filter_id": "filter_id"
    }
  },
  inputParamsSchema
}

export default tool