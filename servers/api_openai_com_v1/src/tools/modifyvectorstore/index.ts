import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "modifyvectorstore",
  "toolDescription": "Modifies a vector store.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/vector_stores/{vector_store_id}",
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
      "name": "name",
      "expires_after": "expires_after",
      "metadata": "metadata"
    }
  },
  inputParamsSchema
}

export default tool