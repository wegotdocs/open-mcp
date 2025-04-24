import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "searchvectorstore",
  "toolDescription": "Search a vector store for relevant chunks based on a query and file attributes filter.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/vector_stores/{vector_store_id}/search",
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
    "path": {
      "vector_store_id": "vector_store_id"
    },
    "body": {
      "query": "query",
      "rewrite_query": "rewrite_query",
      "max_num_results": "max_num_results",
      "filters": "filters",
      "ranking_options": "ranking_options"
    }
  },
  inputParamsSchema
}

export default tool