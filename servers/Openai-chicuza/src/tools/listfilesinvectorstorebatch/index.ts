import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listfilesinvectorstorebatch",
  "toolDescription": "Returns a list of vector store files in a batch.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/vector_stores/{vector_store_id}/file_batches/{batch_id}/files",
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
      "vector_store_id": "vector_store_id",
      "batch_id": "batch_id"
    },
    "query": {
      "limit": "limit",
      "order": "order",
      "after": "after",
      "before": "before",
      "filter": "filter"
    }
  },
  inputParamsSchema
}

export default tool