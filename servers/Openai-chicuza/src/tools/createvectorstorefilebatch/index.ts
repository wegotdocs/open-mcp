import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createvectorstorefilebatch",
  "toolDescription": "Create a vector store file batch.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/vector_stores/{vector_store_id}/file_batches",
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
      "file_ids": "file_ids",
      "chunking_strategy": "chunking_strategy",
      "attributes": "attributes"
    }
  },
  inputParamsSchema
}

export default tool