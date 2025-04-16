import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatevectorstorefileattributes",
  "toolDescription": "Update attributes on a vector store file.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/vector_stores/{vector_store_id}/files/{file_id}",
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
      "file_id": "file_id"
    },
    "body": {
      "attributes": "attributes"
    }
  },
  inputParamsSchema
}

export default tool