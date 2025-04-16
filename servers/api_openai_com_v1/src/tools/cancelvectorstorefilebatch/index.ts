import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "cancelvectorstorefilebatch",
  "toolDescription": "Cancel a vector store file batch. This attempts to cancel the processing of files in this batch as soon as possible.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/vector_stores/{vector_store_id}/file_batches/{batch_id}/cancel",
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
      "vector_store_id": "vector_store_id",
      "batch_id": "batch_id"
    }
  },
  inputParamsSchema
}

export default tool