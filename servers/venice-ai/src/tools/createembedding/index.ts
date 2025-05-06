import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createembedding",
  "toolDescription": "/api/v1/embeddings",
  "baseUrl": "https://api.venice.ai/api/v1",
  "path": "/embeddings",
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
      "dimensions": "dimensions",
      "encoding_format": "encoding_format",
      "input": "input",
      "model": "model",
      "user": "user"
    },
    "header": {
      "Accept-Encoding": "Accept-Encoding"
    }
  },
  inputParamsSchema
}

export default tool