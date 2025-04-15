import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createclassification",
  "toolDescription": "Classifies a Document into labels based on its content.",
  "baseUrl": "https://api.totoy.ai/v1",
  "path": "/classification",
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
      "document": "document"
    }
  },
  inputParamsSchema
}

export default tool