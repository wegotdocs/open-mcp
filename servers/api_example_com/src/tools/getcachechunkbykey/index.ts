import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getcachechunkbykey",
  "toolDescription": "Get cache embeddings by key",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/admin/cache/chunk",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "query": {
      "key": "key"
    }
  },
  inputParamsSchema
}

export default tool