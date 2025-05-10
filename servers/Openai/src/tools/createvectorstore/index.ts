import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createvectorstore",
  "toolDescription": "Create a vector store.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/vector_stores",
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
      "file_ids": "file_ids",
      "name": "name",
      "expires_after": "expires_after",
      "chunking_strategy": "chunking_strategy",
      "metadata": "metadata"
    }
  },
  inputParamsSchema
}

export default tool