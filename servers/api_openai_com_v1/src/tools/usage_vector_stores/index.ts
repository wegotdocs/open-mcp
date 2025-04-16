import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "usage_vector_stores",
  "toolDescription": "Get vector stores usage details for the organization.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/organization/usage/vector_stores",
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
      "start_time": "start_time",
      "end_time": "end_time",
      "bucket_width": "bucket_width",
      "project_ids": "project_ids",
      "group_by": "group_by",
      "limit": "limit",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool