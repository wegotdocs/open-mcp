import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createexplanation",
  "toolDescription": "Explains a document in any language",
  "baseUrl": "https://api.totoy.ai/v1",
  "path": "/explanation",
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
      "output_language": "output_language",
      "language_level": "language_level",
      "source_id": "source_id",
      "messages": "messages",
      "markdown_response": "markdown_response"
    }
  },
  inputParamsSchema
}

export default tool