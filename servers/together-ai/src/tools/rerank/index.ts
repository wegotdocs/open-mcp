import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "rerank",
  "toolDescription": "Create a rerank request",
  "baseUrl": "https://api.together.xyz/v1",
  "path": "/rerank",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "model": "model",
      "query": "query",
      "documents": "documents",
      "top_n": "top_n",
      "return_documents": "return_documents",
      "rank_fields": "rank_fields"
    }
  },
  inputParamsSchema
}

export default tool